import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import '../assets/scss/components/Login.scss';
import { jwtDecode } from 'jwt-decode';


const Login = () => {
    // State hooks
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useNavigate();

    // Destructure setIsAuthenticated from useAuth
    const { setIsAuthenticated, setToken } = useAuth(); // Use useAuth here

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:4001/user/login', {
                usernameOrEmail: identifier,
                password,
            });
            if (response.data.jwtToken) {
                localStorage.setItem('token', response.data.jwtToken); // Store the JWT token

                // Decode the JWT token to extract the user ID (sub claim)
                const decodedToken = jwtDecode(response.data.jwtToken);
                localStorage.setItem('userId', decodedToken.sub); // Store the user's ID from the decoded token

                console.log('Decoded token sub:', decodedToken.sub); // Log the decoded token to the console
                
                setIsAuthenticated(true); // Update authentication state
                setToken(response.data.jwtToken); // Update the token in context
                history('/browse'); // Redirect to the browse page
            } else {
                setError('Invalid username/email or password. Please try again.');
            }
        } catch (err) {
            setError(err.response?.data || 'An error occurred. Please try again later.');
        }
    };

    return (
        <form className='login' onSubmit={handleSubmit}>
            <label className='login-username'>
                Username:
                <input
                className='input'
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                />
            </label>
            <label className='login-password'>
                Password:
                <input
                className='input'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            {error && <p className="error-message">{error}</p>}
            <button className='button' type="submit">LOG IN</button>
        </form>
    );
};

export default Login;

//TODO: Display favourites 