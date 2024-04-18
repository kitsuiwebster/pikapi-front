import '../assets/scss/pages/LandingPage.scss';
import '../assets/scss/index.scss';
import pikapiLogo from '../assets/images/logo.png';
import React, { useState, useEffect } from 'react';
import { useAuth } from '../AuthContext';
import { Link } from 'react-router-dom';

const images = [
    require('../assets/images/background/00.png'),
    require('../assets/images/background/01.png'),
    require('../assets/images/background/02.png'),
    require('../assets/images/background/03.png'),
    require('../assets/images/background/04.png'),
];

      
function LandingPage() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const { isAuthenticated } = useAuth();
    const username = localStorage.getItem('username');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        
        return () => clearInterval(intervalId);
    }, []);
        
        
    return (
        <div id="landingpage" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
            <div className="landingpage">
                <nav className="landingpage-navbar">
                    <a href="/">
                        <img src={pikapiLogo} alt="PikaPi Pikachu" className='layout-header-logo' />
                    </a>
                    <ul className="landingpage-nav-links">
                        <li className='landingpage-li'><a className='landingpage-a' href="/about">About</a></li>
                        <li className='landingpage-li'><a className='landingpage-a' href="/contact">Contact</a></li>
                        {isAuthenticated ? (
                            <span className="landingpage-login-text">Connected as {username}</span>
                        ) : (
                            <Link to="/login" className="landingpage-login-button">Log in</Link>
                        )}
                    </ul>
                </nav>
                <header className="landingpage-hero">
                    <h1 className="landingpage-hero-title">Welcome to Pikapi</h1>
                    <p className="landingpage-hero-subtitle">Pikachu's Platform ⚡</p>
                    <a href="/browse" className="landingpage-cta-button">Browse Pictures</a>
                </header>
                <footer className="landingpage-footer">
                    <p className='landingpage-footer-text'>© Copyright Pikapi All Rights Reserved</p>
                </footer>
            </div>
        </div>
    );
}

export default LandingPage;
