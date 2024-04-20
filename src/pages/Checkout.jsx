import React from 'react';
import axios from 'axios';
import { url } from '../index';

const Checkout = () => {
    // Function to handle the redirection to Stripe Checkout
    const handleCheckout = async () => {
        try {
            // Call your backend to create the checkout session using axios
            const { data } = await axios.post(`${url}/payments/create-checkout-session`);

            // Redirect to Stripe Checkout
            const stripe = window.Stripe(process.env.REACT_APP_STRIPE_TESTING_PUBLIC_KEY); 
            console.log(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
            const { error } = await stripe.redirectToCheckout({ sessionId: data.sessionId });

            if (error) {
                console.error('Error in redirecting to Stripe Checkout:', error.message);
            }
        } catch (error) {
            console.error('Error creating checkout session:', error.response?.data?.error || error.message);
        }
    };

    return (
        <div id="checkout">
            <h1 className='title'>Checkout</h1>
            {/* Button to trigger the checkout process */}
            <button onClick={handleCheckout} className="paymentform-button">
                Proceed to Checkout
            </button>
        </div>
    );
}

export default Checkout;
