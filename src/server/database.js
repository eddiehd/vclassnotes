// database.js

const sqlite3 = require('sqlite3').verbose();

const dbPath = 'w3s-dynamic-storage/database.db'; // Path to your SQLite database file

// Create a database connection
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Database connection error:', err.message);
  } else {
    console.log('Connected to the SQLite database');
  }
});

// Export the run function
export function run(query, params, callback) { return db.run(query, params, callback); }

// Export the database connection
export function get() { return db; }
