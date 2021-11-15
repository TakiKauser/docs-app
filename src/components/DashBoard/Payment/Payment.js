import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51JvlGeI2RhuEJvvvKPMdR2GQPJqx5mNDhB2qFXwEflvd3blzboVR64YtdXLISnAf2bMOkXyEkIPrzsM5wAdPDX19000rbF8gtw');


const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
            .then((response) => response.json())
            .then(jsonData => {
                console.log(jsonData);
                setAppointment(jsonData);
            })
    }, [appointmentId])
    return (
        <div>
            <h2>Payment for {appointmentId} </h2>
            <h4>${appointment?.fee}</h4>
            {
                appointment?.fee &&
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        key={appointment?._id}
                        appointment={appointment}
                    />
                </Elements>
            }
        </div>
    );
};

export default Payment;