 // invoiceController.js

const Invoice = require('../models/Invoice');

exports.generateInvoice = async (req, res) => {
  try {
    const { serviceRendered, additionalDetails } = req.body;
    const userId = req.user.userId;

    await Invoice.generate(userId, serviceRendered, additionalDetails);

    res.status(201).json({ message: 'Invoice generated and saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getInvoiceHistory = async (req, res) => {
  try {
    const userId = req.user.userId;
    const invoiceHistory = await Invoice.getHistory(userId);

    res.status(200).json(invoiceHistory);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
