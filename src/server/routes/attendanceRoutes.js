  // attendanceRoutes.js (Express Router)

import { Router } from 'express';
const router = Router();
import { recordAttendance } from '../controllers/attendanceController';
import { authenticate } from '../middlewares/authMiddleware';

router.post('/attendance', authenticate, recordAttendance);

export default router;
