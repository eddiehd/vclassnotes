 import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
    setIsLoading(true);
    try {
      // API call for login
      const response = await axios.post('/api/login', {
        email,
        password
      });
      // Handle successful login response
    } catch (error) {
      // Handle error
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async () => {
    setIsLoading(true);
    try {
      // API call for signup
      const response = await axios.post('/api/signup', {
        email,
        password
      });
      // Handle successful signup response
    } catch (error) {
      // Handle error
    } finally {
      setIsLoading(false);
    }
  };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
