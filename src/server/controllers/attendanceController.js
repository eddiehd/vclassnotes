 // attendanceController.js

const Attendance = require('../models/Attendance');

exports.recordAttendance = async (req, res) => {
  try {
    const { date, hours } = req.body;
    const userId = req.user.userId;

    await Attendance.record(userId, date, hours);

    res.status(201).json({ message: 'Attendance recorded successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getAttendanceHistory = async (req, res) => {
  try {
    const userId = req.user.userId;
    const attendanceHistory = await Attendance.getHistory(userId);

    res.status(200).json(attendanceHistory);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
