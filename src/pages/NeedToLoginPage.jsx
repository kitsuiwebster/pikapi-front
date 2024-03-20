import React from 'react';
import { Link } from 'react-router-dom'; 
import '../assets/scss/pages/NeedToLoginPage.scss';
import '../assets/scss/index.scss';
import Login from '../components/Login';

const NeedToLoginPage = () => {
    return (
        <>
            <section id="needtologin">
                <div className='needtologin'>
                    <h1 className='title'>You need to log in to access this page !</h1>
                    <Login />
                    <p className='needtologin-register'>Don't have an account? <Link className='needtologin-link' to="/register">Register</Link></p>
                </div>
            </section>
        </>
    );
};

export default NeedToLoginPage;
