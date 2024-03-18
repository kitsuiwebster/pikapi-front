import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [identifier, setIdentifier] = useState(''); // Renamed from email to identifier
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useNavigate(); // Used for redirection after successful login

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(''); // Clear any previous error messages
    try {
      const response = await axios.post('http://localhost:4001/user/login', {
        usernameOrEmail: identifier, // Send the identifier which could be username or email
        password,
      });
      if (response.data.jwtToken) {
        localStorage.setItem('token', response.data.jwtToken); // Store the token
        history('/'); 
        // Optionally show a success message or handle successful login state
      } else {
        // Handle the case where response is successful, but jwtToken is not provided
        setError('Invalid username/email or password. Please try again.');
      }
    } catch (err) {
      if (err.response) {
        // If the server responded with a status code outside the 2xx range
        setError(err.response.data || 'Invalid username/email or password. Please try again.');
      } else {
        // No response from the server or another error occurred
        setError('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username/Email:
        <input
          type="text" // Changed type to text to accept both username and email
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
