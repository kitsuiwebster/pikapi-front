import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Ensure this is the correct path

const Login = () => {
  // State hooks
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useNavigate();

  // Destructure setIsAuthenticated from useAuth
  const { setIsAuthenticated } = useAuth(); // Use useAuth here

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Try-catch block for login attempt
    try {
      const response = await axios.post('http://localhost:4001/user/login', {
        usernameOrEmail: identifier,
        password,
      });
      if (response.data.jwtToken) {
        localStorage.setItem('token', response.data.jwtToken); // Store the JWT token
        setIsAuthenticated(true); // Update authentication state
        history('/'); // Redirect to home or desired route
      } else {
        setError('Invalid username/email or password. Please try again.');
      }
    } catch (err) {
      // Error handling logic
      setError(err.response?.data || 'An error occurred. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username/Email:
        <input
          type="text"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {error && <p className="error-message">{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
