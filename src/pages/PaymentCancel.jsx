import React from 'react';
import '../assets/scss/pages/PaymentCancel.scss';
import { Link } from 'react-router-dom';

const PaymentCancel = () => {
    return (
        <div id="cancel">
            <div className="cancel">
                <header className="cancel-header">
                    <h1 className="cancel-title">Payment Canceled</h1>
                </header>
                <div className="cancel-body">
                    <p className="cancel-description">
                    Unfortunately, your payment could not be processed at this time. It may have been cancelled or declined.
                    </p>
                    <div className="button-container">
                        <Link to="/">
                            <button className='cancel-button'>Go to home page</button>
                        </Link>
                        <Link to="/contact">
                            <button className="cancel-button">Contact us</button>
                        </Link>
                    </div>
                </div>
                <footer className="cancel-footer">
                    <p className="cancel-footer-text">If you need immediate assistance, please call our support hotline.</p>
                </footer>
            </div>
        </div>
    );
};

export default PaymentCancel;
