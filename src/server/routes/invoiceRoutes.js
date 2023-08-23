 // invoiceRoutes.js

const express = require('express');
const router = express.Router();
const invoiceController = require('../controllers/invoiceController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/generate-invoice', authMiddleware.authenticate, invoiceController.generateInvoice);
router.get('/invoice-history', authMiddleware.authenticate, invoiceController.getInvoiceHistory);

module.exports = router;
