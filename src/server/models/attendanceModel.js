// attendanceModel.js

import { run } from '/home/app/src/server/database'; // Import the database connection

class Attendance {
  static createTable() {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS attendance (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        userId INTEGER,
        date TEXT NOT NULL,
        hours INTEGER NOT NULL,
        FOREIGN KEY (userId) REFERENCES users(id)
      )
    `;

    run(createTableQuery, (err) => {
      if (err) {
        console.error('Error creating attendance table:', err.message);
      } else {
        console.log('Attendance table created or already exists');
      }
    });
  }

  static recordAttendance(userId, date, hours) {
    const recordAttendanceQuery = 'INSERT INTO attendance (userId, date, hours) VALUES (?, ?, ?)';
    run(recordAttendanceQuery, [userId, date, hours], (err) => {
      if (err) {
        console.error('Error recording attendance:', err.message);
      } else {
        console.log('Attendance recorded successfully');
      }
    });
  }

  // Add more methods for retrieving, updating, and deleting attendance as needed
}

export default Attendance;
