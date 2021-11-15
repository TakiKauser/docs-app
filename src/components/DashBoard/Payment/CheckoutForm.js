import { LinearProgress } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const CheckoutForm = ({ appointment }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { fee, patientName, _id } = appointment;
    const { user } = useAuth();

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        fetch(`http://localhost:5000/create-payment-intent`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ fee })
        })
            .then(response => response.json())
            .then(jsonData => {
                // console.log(jsonData);
                setClientSecret(jsonData.clientSecret);
            })
    }, [fee])

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        setProcessing(true);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            // console.log('[error]', error);
            setError(error.message);
        } else {
            setError('');
            console.log('[PaymentMethod]', paymentMethod);
        }

        // payment intent
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: user.email,
                    },
                },
            },
        );
        if (intentError) {
            setError(intentError.message);
            setSuccess('')
        }
        else {
            setError('');
            setSuccess('Your payment process was successful.')
            console.log(paymentIntent);
            setProcessing(false);

            // save to database
            const payment = {
                amount: paymentIntent.amount,
                created: paymentIntent.created,
                last4: paymentMethod.card.last4,
                transaction: paymentIntent.client_secret.slice('_secret')[0]
            }
            const url = `http://localhost:5000/appointments/${_id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(response => response.json())
                .then(jsonData => {
                    console.log(jsonData);
                })
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {
                    processing ? <LinearProgress />
                        :
                        <button type="submit" disabled={!stripe || success}>
                            Pay {fee}$
                        </button>
                }
            </form>
            {
                error &&
                <p style={{ color: 'red' }}> {error}</p>
            }
            {
                success &&
                <p style={{ color: 'green' }}> {success}</p>
            }
        </div >
    );
};

export default CheckoutForm;