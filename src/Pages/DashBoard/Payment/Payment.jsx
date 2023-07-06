import React from 'react';
import Sectiontitle from '../../../Component/Sectiontitle/Sectiontitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Checkout from './Checkout';
import useCart from '../../../Hooks/Usecart';
import '../Payment/common.css'
//TODO :provide publishable key
const Payment = () => {
    const stripePromise =loadStripe(import.meta.env.VITE_Payment_TEST_KEY);
    const [cart]=useCart();
    const total=cart.reduce((sum,item)=>sum+item.price,0)
    const price= parseFloat(total.toFixed(2))
    return (
        <div className='w-full'>
            <Sectiontitle heading="Please provide" subheading="Payment"></Sectiontitle>
            <h3>paymet gateway</h3>
            <Elements stripe={stripePromise}>
                <Checkout cart={cart} price={price}></Checkout>

            </Elements>
        </div>
    );
};

export default Payment;