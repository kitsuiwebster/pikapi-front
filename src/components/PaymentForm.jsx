import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

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

    const CARD_ELEMENT_OPTIONS = {
        style: {
            base: {
                color: '#303238',
                fontSize: '16px',
                fontFamily: 'sans-serif',
                fontSmoothing: 'antialiased',
                '::placeholder': {
                color: '#CFD7DF',
                },
                ':-webkit-autofill': {
                color: '#e39f48',
                },
            },
            invalid: {
                color: '#e5424d',
                ':focus': {
                color: '#303238',
                },
            },
        },
    };

    return (
        <form onSubmit={handleSubmit}>
        <CardElement 
            options={CARD_ELEMENT_OPTIONS}
            onChange={(event) => {
                if (event.error) {
                setError(event.error.message);
                } else {
                setError(null);
                }
            }}
        />

        <button type="submit" disabled={!stripe}>
            Pay
        </button>
        {error && <div className="error">{error}</div>}
        {paymentSuccessful && <div>Payment Successful!</div>}
        </form>
    );  
};

export default PaymentForm;
