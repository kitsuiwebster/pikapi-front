import React, { useEffect } from 'react';
import '../assets/scss/components/DownloadModal.scss';
import axios from 'axios';
import { url } from '../index';
import pikachuSticker from '../assets/images/pika-sticker.png';
import visaLogo from '../assets/images/visa.png';
import mastercardLogo from '../assets/images/mastercard.png';
import paypalLogo from '../assets/images/paypal.png';

function DownloadModal({ onClose, link1k, selectedPictureId }) { // Include selectedPictureId in the props
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) onClose();
        };

        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);

    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) onClose();
    };

    const purchase4kImage = async () => {
        try {
            const productDetails = {
                name: '4K Image Download',
                amount: 300,
            };
        
            const { data } = await axios.post(`${url}/payments/create-checkout-session`, {
                productDetails,
                pictureId: selectedPictureId
            });
        
            // Redirect to Stripe Checkout
            const stripe = window.Stripe(process.env.REACT_APP_STRIPE_TESTING_PUBLIC_KEY); 
            const { error } = await stripe.redirectToCheckout({ sessionId: data.sessionId });
            console.log('Redirecting to Stripe Checkout with session ID:', data.sessionId);

            if (error) {
                console.error('Error in redirecting to Stripe Checkout:', error.message);
            }
        } catch (error) {
            console.error('Error creating checkout session:', error.response?.data?.error || error.message);
        }
    };

    return (
        <div className="downloadmodal-overlay" onClick={handleOverlayClick}>
            <div className="downloadmodal">
                <h2 className='downloadmodal-title'>Download Illustration</h2>
                <div className="downloadmodal-links">
                    <p className='downloadmodal-text'>500x500 Pixels</p>
                    <a href={link1k} download className="downloadmodal-button">Download</a>
                    <p className='downloadmodal-text downloadmodal-4k'>4000x4000 Pixels (4K)</p>
                    <button onClick={purchase4kImage} className="downloadmodal-button downloadmodal-purchase">Purchase $3.00</button>
                    <div className='downlaodmodal-icons'>
                        <img className='downloadmodal-icon' src={visaLogo} alt="paypal" />
                        <img className='downloadmodal-icon' src={mastercardLogo} alt="visa" />
                        <img className='downloadmodal-icon' src={paypalLogo} alt="mastercard" />
                    </div>
                </div>
                <img className='downloadmodal-img' alt='pikachu sticker' src={pikachuSticker}></img>
            </div>
        </div>
    );
}

export default DownloadModal;
