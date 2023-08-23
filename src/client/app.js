// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from './store'; // Your Redux store
import AuthProvider from './context/AuthContext'; // Create your AuthContext
import LoginSignup from './components/Login';
import Dashboard from './components/dashboard';
import AttendanceTracking from './components/recordattendance';
import InvoiceCreation from './components/generateinvoice';
import PrivateRoute from './components/PrivateRoute';
import Home from './client/Home'; // Import the Home component

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AuthProvider>
          <Router>
            <div className="container">
              <Switch>
                <Route path="/login" component={Login} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <PrivateRoute path="/attendance" component={AttendanceTracking} />
                <PrivateRoute path="/invoice" component={InvoiceCreation} />
                <PrivateRoute path="/Home" component={Home} />
                {/* Add other routes */}
              </Switch>
            </div>
          </Router>
        </AuthProvider>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
