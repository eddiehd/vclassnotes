// authController.js

import { sign } from 'jsonwebtoken';
import { userExists,addUser,findOne } from '/home/app/src/server/models/userModel';

export async function signup(req, res) {
  try {
    const { email, password } = req.body;

    // Check if the user already exists
    const userAlreadyExists = await userExists(email);
    if (userAlreadyExists) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    // Create a new user
    await addUser(email, password);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await findOne(email);
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Check password
    if (user.password !== password) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Generate and send a JWT token
    const token = generateToken(user.id);
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}

// Generate JWT token
const generateToken = (userId) => {
  const secretKey = 'your-secret-key';
  const token = sign({ userId }, secretKey, { expiresIn: '1h' });
  return token;
};

// Export the login and signup functions
export default { login, signup };
