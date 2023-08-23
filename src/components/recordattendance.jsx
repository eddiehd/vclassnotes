import React, { useState } from 'react';
import { Form, Button, Toast, Modal, Spinner } from 'react-bootstrap';

const AttendanceTracking = () => {
  const [date, setDate] = useState('');
  const [hours, setHours] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleTrackAttendance = async () => {
    setIsLoading(true);
    try {
      if (date && hours) {
        setShowSuccessToast(true);
        setShowErrorModal(false);
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 1500));
        // Implement attendance tracking logic using API calls
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

  return (
    <div className="container">
      <h2 className="mt-4">Track Attendance</h2>
      <Toast
        show={showSuccessToast}
        onClose={() => setShowSuccessToast(false)}
        delay={3000}
        autohide
        className="mt-2 bg-success text-white"
      >
        <Toast.Body>Attendance tracked successfully!</Toast.Body>
      </Toast>
      <Modal show={showErrorModal} onHide={() => setShowErrorModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please fill in both date and hours.</Modal.Body>
      </Modal>
      <Form className="mt-4">
        <Form.Group controlId="date">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="hours">
          <Form.Label>Hours</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter hours"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            required
            min="0"
            max="24"
          />
          <Form.Text className="text-muted">
            Hours should be between 0 and 24.
          </Form.Text>
        </Form.Group>

        <Button
          variant="primary"
          onClick={handleTrackAttendance}
          disabled={isLoading}
        >
          {isLoading ? (
            <Spinner animation="border" size="sm" />
          ) : (
            'Track Attendance'
          )}
        </Button>
      </Form>
    </div>
  );
};

export default AttendanceTracking;
