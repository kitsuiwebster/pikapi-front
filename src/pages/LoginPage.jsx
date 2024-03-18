import React from 'react';
import { Link } from 'react-router-dom'; 
import '../assets/scss/pages/LoginPage.scss';
import '../assets/scss/index.scss';
import Login from '../components/Login';

const LoginPage = () => {
    return (
        <>
            <section id="loginpage">
                <div className='loginpage'>
                    <h1>Login to Pikapi !</h1>
                    <Login />
                    <p>Don't have an account? <Link to="/register">Register here</Link></p>
                </div>
            </section>
        </>
    );
};

export default LoginPage;
