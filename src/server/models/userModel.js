 // userModel.js

import { run,get } from '/home/app/src/server/database'; // Import the database connection

class User {
  static createTable() {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT NOT NULL,
        password TEXT NOT NULL
      )
    `;

    run(createTableQuery, (err) => {
      if (err) {
        console.error('Error creating users table:', err.message);
      } else {
        console.log('Users table created or already exists');
      }
    });
  }

  static addUser(email, password) {
    const addUserQuery = 'INSERT INTO users (email, password) VALUES (?, ?)';
    run(addUserQuery, [email, password], (err) => {
      if (err) {
        console.error('Error adding user:', err.message);
      } else {
        console.log('User added successfully');
      }
    });
  }

  static getUserById(id, callback) {
    const getUserQuery = 'SELECT * FROM users WHERE id = ?';
    get(getUserQuery, [id], (err, row) => {
      if (err) {
        console.error('Error retrieving user:', err.message);
        callback(err, null);
      } else {
        callback(null, row);
      }
    });
  }

  static updateUser(id, email, password) {
    const updateUserQuery = 'UPDATE users SET email = ?, password = ? WHERE id = ?';
    run(updateUserQuery, [email, password, id], (err) => {
      if (err) {
        console.error('Error updating user:', err.message);
      } else {
        console.log('User updated successfully');
      }
    });
  }

  static deleteUser(id) {
    const deleteUserQuery = 'DELETE FROM users WHERE id = ?';
    run(deleteUserQuery, [id], (err) => {
      if (err) {
        console.error('Error deleting user:', err.message);
      } else {
        console.log('User deleted successfully');
      }
    });
  }
  

  static findOne(email, callback) {
    const findOneQuery = 'SELECT * FROM users WHERE email = ?';
    db.get(findOneQuery, [email], (err, row) => {
      if (err) {
        console.error('Error retrieving user:', err.message);
        callback(err, null);
      } else {
        callback(null, row);
      }
    });
  }

  // Add more methods as needed
  // New method to check if a user exists by email
  static userExists(email, callback) {
    const userExistsQuery = 'SELECT COUNT(*) as count FROM users WHERE email = ?';
    db.get(userExistsQuery, [email], (err, row) => {
      if (err) {
        console.error('Error checking if user exists:', err.message);
        callback(err, null);
      } else {
        callback(null, row.count > 0);
      }
    });
  }
}

exports.default = User;
exports.addUser = User.addUser;
exports.findOne = User.findOne;
exports.userExists = User.userExists;
exports.addUser = User.addUser;