 // authMiddleware.js

import { verify } from 'jsonwebtoken';

// Secret key for JWT
const secretKey = 'your-secret-key';

const authenticate = (req, res, next) => {
  // Get the token from the request headers
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Authorization token is missing' });
  }

  try {
    // Verify and decode the token
    const decodedToken = verify(token, secretKey);
    req.user = { userId: decodedToken.userId };
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

export default { authenticate };
