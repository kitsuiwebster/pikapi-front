import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { url } from '../index';
import '../assets/scss/pages/PaymentSuccess.scss';
import { Link } from 'react-router-dom';

function PaymentSuccess() {
    const location = useLocation();
    const [paymentStatus, setPaymentStatus] = useState('pending');
    const [pictureId, setPictureId] = useState(null); // Store the pictureId

    useEffect(() => {
        const sessionId = new URLSearchParams(location.search).get('session_id');
        if (sessionId) {
            verifyPayment(sessionId);
        }
    }, [location]);

    const verifyPayment = async (sessionId) => {
        try {
            const response = await axios.get(`${url}/payments/verify-payment`, {
                params: { session_id: sessionId },
            });
            if (response.data.success) {
                setPaymentStatus('success');
                setPictureId(response.data.pictureId); // Set the picture ID from the response
            } else {
                setPaymentStatus('failed');
            }
        } catch (error) {
            setPaymentStatus('failed');
            console.error('Error verifying payment:', error);
        }
    };

    const handleDownload = async () => {
        try {
            const response = await axios.get(`${url}/pictures/secure-download/${pictureId}`, { responseType: 'blob' });
            // Create a new Blob object using the response data of the file
            const blob = new Blob([response.data], { type: 'image/png' });
            const downloadUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.setAttribute('download', 'pikachu4k.png'); // Set the file name
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
        } catch (error) {
            console.error('Error downloading the picture:', error);
        }
    };

    return (
        <div className="payment-success">
            <h1 className="payment-success-title">Payment Successful!</h1>
            <div className="payment-success-content">
                {paymentStatus === 'pending' && <p className="payment-success-status">Verifying payment...⏳</p>}
                {paymentStatus === 'success' && (
                    <>
                        <p className="payment-success-message">Thank you for your purchase 🤗</p>
                        <button onClick={handleDownload} className="payment-success-download-button">
                            Download Your Purchase ✨
                        </button>
                        <Link to="/">
                            <button className='error-button'>Go to home page</button>
                        </Link>
                    </>
                )}
                {paymentStatus === 'failed' && <p className="payment-success-error">Payment verification failed. Please try again.</p>}
            </div>
        </div>
    );
}

export default PaymentSuccess;
