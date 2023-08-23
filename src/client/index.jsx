// index.js or app.js

import express from 'express';
import { json } from 'body-parser';
import authRoutes from '/home/app/src/server/routes/authRoutes';
import attendanceRoutes from '/home/app/src/server/routes/attendanceRoutes';
import invoiceRoutes from '/home/app/src/server/routes/invoiceRoutes';
import { createTable } from '/home/app/src/server/models/userModel';
import { createTable as _createTable } from '/home/app/src/server/models/attendanceModel';
import { createTable as __createTable } from '/home/app/src/server/models/invoiceModel';

const app = express();
app.use(json());

// Initialize tables for each model
createTable();
_createTable();
__createTable();

app.use('/api', authRoutes);
app.use('/api', attendanceRoutes);
app.use('/api', invoiceRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3030');
});
