// Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container text-center py-5">
      <h2 className="mb-4">Welcome to Attendance Tracker App</h2>
      <p className="lead">Keep track of attendance and generate invoices with ease.</p>
      <div className="row mt-5">
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Dashboard</h5>
              <p className="card-text">View overall statistics and reports.</p>
              <Link to="/dashboard" className="btn btn-primary">
                Go to Dashboard
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Attendance Tracking</h5>
              <p className="card-text">Track daily service hours for students.</p>
              <Link to="/attendance" className="btn btn-primary">
                Start Tracking
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Invoice Creation</h5>
              <p className="card-text">Generate invoices based on services provided.</p>
              <Link to="/invoice" className="btn btn-primary">
                Create Invoice
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
