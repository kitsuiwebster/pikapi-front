import '../assets/scss/layouts/PaymentSuccessLayout.scss';
import pikapiLogo from '../assets/images/logo.png';
import { FaInstagram } from 'react-icons/fa'; 
import { useAuth } from '../AuthContext';
import { Link } from 'react-router-dom';


function PaymentSuccessLayout({ children }) {
    const { isAuthenticated } = useAuth();
    const username = localStorage.getItem('username');

    return (
        <>
            <div className={`paymentsuccesslayout`}>
                <header className="paymentsuccesslayout-header">
                    <div className='paymentsuccesslayout-header-container'>
                        <a href="/">
                            <img src={pikapiLogo} alt="PikaPi Pikachu" className='paymentsuccesslayout-header-logo' />
                        </a>
                        {isAuthenticated ? (
                            <span className="paymentsuccesslayout-header-login-text">Connected as {username}</span>
                        ) : (
                            <Link to="/login" className="paymentsuccesslayout-header-login-button">Log in</Link>
                        )}
                    </div>
                </header>
                
                <main className='paymentsuccesslayout-main'>
                    {children}
                </main>

                <footer className="paymentsuccesslayout-footer">
                    <p className='paymentsuccesslayout-footer-text'>© Copyright Pikapi All Rights Reserved</p>
                    <a className='paymentsuccesslayout-footer-container' href="https://www.instagram.com/kitsuiwebster/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className='paymentsuccesslayout-footer-ig' />
                    </a>
                </footer>
            </div>
        </>
    );
}

export default PaymentSuccessLayout;

