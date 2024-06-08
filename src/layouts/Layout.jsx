import '../assets/scss/layouts/Layout.scss';
import { useTheme } from '../ThemeContext';
import pikapiLogo from '../assets/images/logo.png';
import SideMenu from '../components/SideMenu';
import { FaInstagram } from 'react-icons/fa'; 
import { useAuth } from '../AuthContext';
import { Link } from 'react-router-dom';


function Layout({ children }) {
    const { theme, toggleTheme } = useTheme();
    const { isAuthenticated } = useAuth();
    const username = localStorage.getItem('username');

    return (
        <>
            <div className={`layout ${theme}`}>
                <header className="layout-header">
                    <div className='layout-header-container'>
                        <a href="/">
                            <img src={pikapiLogo} alt="PikaPi Pikachu" className='layout-header-logo' />
                        </a>
                        {isAuthenticated ? (
                            <span className="layout-header-login-text">Connected as {username}</span>
                        ) : (
                            <Link to="/login" className="layout-header-login-button">Log in</Link>
                        )}
                    </div>
                    <button onClick={toggleTheme} aria-label="Toggle theme" className={`layout-header-toggle-theme ${theme}`}>
                    </button>
                </header>
                
                <main className='layout-main'>
                    <SideMenu />
                    {children}
                </main>

                <footer className="layout-footer">
                    <p className='layout-footer-text'>© Copyright Pikapi All Rights Reserved</p>
                    <a className='layout-footer-container' href="https://www.instagram.com/kitsuiwebster/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className='layout-footer-ig' />
                    </a>
                </footer>
            </div>
        </>
    );
}

export default Layout;

