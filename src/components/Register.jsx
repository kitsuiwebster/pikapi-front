import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(''); // Clear any previous errors
    try {
      const response = await axios.post('http://localhost:4001/user/register', {
        username,
        email,
        password,
      });
      // Check the HTTP status code instead of the success property
      if (response.status === 201) {
        // Registration successful, redirect to login page
        history('/login');
        alert('Registration successful! Please login.');
      } else {
        // If the status code is not 201, we assume something went wrong
        setError('Registration failed. Please try again.');
      }
    } catch (error) {
      if (error.response) {
        // If there's a server response with an error status, use that message
        setError(error.response.data.message || 'Registration failed. Please try again.');
      } else {
        // General error handling for network issues or no response
        setError('Registration failed. Please try again later.');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
