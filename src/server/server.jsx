 // server.js

import express from 'express';
import { json,urlencoded } from 'body-parser';
import { writeFile } from 'fs';
import { join } from 'path';

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

// Endpoint to receive and save PDF
app.post('/api/save-pdf', (req, res) => {
  const pdfData = req.files.pdf.data;
  const pdfPath = join(__dirname, 'pdfs', 'invoice.pdf');

  // Save the PDF to the server
  writeFile(pdfPath, pdfData, (err) => {
    if (err) {
      console.error('Error saving PDF:', err);
      res.status(500).json({ error: 'Error saving PDF' });
    } else {
      console.log('PDF saved successfully');
      res.status(200).json({ message: 'PDF saved successfully' });
    }
  });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
