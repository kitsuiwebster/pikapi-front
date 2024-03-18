import React from 'react';
import '../assets/scss/pages/RegisterPage.scss';
import '../assets/scss/index.scss'
import Register from '../components/Register';
import { Link } from 'react-router-dom'; 

const RegisterPage = () => {
    return (
        <>
            <section id="registerpage">
                <div className='registerpage'>
                    <h1>Register to Pikapi !</h1>
                    <Register />
                    <p>Already have an account? <Link to="/login">Login here</Link></p>
                </div>
            </section>
        </>
    );
};

export default RegisterPage;
