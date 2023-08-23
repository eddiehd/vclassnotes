// InvoiceCreation.js

import React, { useState } from 'react';
import { Form, Button, Toast, Modal, Spinner } from 'react-bootstrap';
import axios from 'axios';
import puppeteer from 'puppeteer';

const InvoiceCreation = () => {
  const [serviceRendered, setServiceRendered] = useState('');
  const [additionalDetails, setAdditionalDetails] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleGenerateInvoice = async () => {
    setIsLoading(true);
    try {
      if (serviceRendered && additionalDetails) {
        setShowSuccessToast(true);
        setShowErrorModal(false);

        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.setContent(`
          <h1>Invoice</h1>
          <p>Service Rendered: ${serviceRendered}</p>
          <p>Additional Details: ${additionalDetails}</p>
        `);

        const pdfBuffer = await page.pdf();

        await browser.close();

        // Create a new FormData object to send the PDF to the server
        const formData = new FormData();
        formData.append('pdf', new Blob([pdfBuffer], { type: 'application/pdf' }));

        // Send the PDF to the server using axios
        const response = await axios.post('/api/save-pdf', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        // Handle the response as needed

      } else {
        setShowErrorModal(true);
        setShowSuccessToast(false);
      }
    } catch (error) {
      setShowErrorModal(true);
      setShowSuccessToast(false);
    } finally {
      setIsLoading(false);
    }
  };

  // Rest of the component code...
};
