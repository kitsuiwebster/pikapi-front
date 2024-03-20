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
                    <h1 className='title'>Log in to Pikapi</h1>
                    <Login />
                    <p className='loginpage-register'>Don't have an account?<Link className='loginpage-link' to="/register">Register here</Link></p>
                </div>
            </section>
        </>
    );
};

export default LoginPage;
