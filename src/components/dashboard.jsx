import React, { useState } from 'react';
import { Card, Toast, Modal, Spinner } from 'react-bootstrap';

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleAction = async () => {
    setIsLoading(true);
    try {
      setIsLoading(false); // Implement your action logic
      setShowSuccessToast(true);
      setShowErrorModal(false);
    } catch (error) {
      setShowErrorModal(true);
      setShowSuccessToast(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <h2 className="mt-4">Dashboard</h2>
      <Toast
        show={showSuccessToast}
        onClose={() => setShowSuccessToast(false)}
        delay={3000}
        autohide
        className="mt-2 bg-success text-white"
      >
        <Toast.Body>Action completed successfully!</Toast.Body>
      </Toast>
      <Modal show={showErrorModal} onHide={() => setShowErrorModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>An error occurred. Please try again.</Modal.Body>
      </Modal>
      <Card className="mt-4">
        <Card.Body>
          <Card.Title>Dashboard Content</Card.Title>
          <Card.Text>Display user-specific information here.</Card.Text>
          <Button
            variant="primary"
            onClick={handleAction}
            disabled={isLoading}
          >
            {isLoading ? (
              <Spinner animation="border" size="sm" />
            ) : (
              'Perform Action'
            )}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Dashboard;
