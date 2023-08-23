 // invoiceModel.js

import { run } from '/home/app/src/server/database'; // Import the database connection

class Invoice {
  static createTable() {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS invoices (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        userId INTEGER,
        serviceRendered TEXT NOT NULL,
        additionalDetails TEXT,
        FOREIGN KEY (userId) REFERENCES users(id)
      )
    `;

    run(createTableQuery, (err) => {
      if (err) {
        console.error('Error creating invoices table:', err.message);
      } else {
        console.log('Invoices table created or already exists');
      }
    });
  }

  static generateInvoice(userId, serviceRendered, additionalDetails) {
    const generateInvoiceQuery = 'INSERT INTO invoices (userId, serviceRendered, additionalDetails) VALUES (?, ?, ?)';
    run(generateInvoiceQuery, [userId, serviceRendered, additionalDetails], (err) => {
      if (err) {
        console.error('Error generating invoice:', err.message);
      } else {
        console.log('Invoice generated and saved successfully');
      }
    });
  }

  // Add more methods for retrieving, updating, and deleting invoices as needed
}

export default Invoice;
