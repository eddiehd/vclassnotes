 // authRoutes.js (Express Router)

import { Router } from 'express';
const router = Router();
import { login,signup } from '/home/app/src/server/controllers/authController';

router.post('/login', login);
router.post('/signup', signup);

export default router;
