import React from 'react';
import '../assets/scss/pages/Checkout.scss';
import '../assets/scss/index.scss';
import PaymentForm from '../components/PaymentForm';

function Checkout() {
    return (
        <>
            <div id="checkout">
                <h1 className='title'>Checkout</h1>
                <PaymentForm />
            </div>
        </>
    );
}

export default Checkout;
