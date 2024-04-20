import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import '../assets/scss/components/PaymentForm.scss';
import { CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';


const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('');
    const [error, setError] = useState(null);
    const [paymentSuccessful, setPaymentSuccessful] = useState(false);

    useEffect(() => {
        // Fetch the client secret from the backend
        const fetchClientSecret = async () => {
        const response = await fetch('/payments/create-payment-intent', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: 5, currency: 'usd' }),
        });
        const data = await response.json();
        setClientSecret(data.clientSecret);
        };

        fetchClientSecret();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
        // Stripe.js has not yet loaded.
        return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: cardElement,
            billing_details: {
            // include any billing details here
            },
        },
        });

        if (error) {
        setError(error.message);
        } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        setPaymentSuccessful(true);
        // Handle successful payment here (e.g. display a confirmation message)
        }
    };

    return (
        <form className='paymentform' onSubmit={handleSubmit}>

            <div className='paymentform-fields'>
                <CardNumberElement className="StripeElement" /* ... */ />
                <div className='paymentform-smalls-fields'>
                    <CardExpiryElement className="StripeElement" /* ... */ />
                    <CardCvcElement className="StripeElement" /* ... */ />
                </div>
            </div>


            <button className='paymentform-button' type="submit" disabled={!stripe}>
                Pay
            </button>
            {error && <div className="error">{error}</div>}
            {paymentSuccessful && <div>Payment Successful!</div>}
        </form>
    );  
};

export default PaymentForm;
