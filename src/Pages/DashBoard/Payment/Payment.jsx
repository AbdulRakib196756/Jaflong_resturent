import React from 'react';
import Sectiontitle from '../../../Component/Sectiontitle/Sectiontitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Checkout from './Checkout';
//TODO :provide publishable key
const Payment = () => {
    const stripePromise =loadStripe(import.meta.env.VITE_Payment_TEST_KEY);
    return (
        <div className='w-full'>
            <Sectiontitle heading="Please provide" subheading="Payment"></Sectiontitle>
            <h3>paymet gateway</h3>
            <Elements stripe={stripePromise}>
                <Checkout></Checkout>

            </Elements>
        </div>
    );
};

export default Payment;