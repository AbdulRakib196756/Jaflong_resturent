import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiossecure';

import useAuth from '../../../Hooks/useAuth';
import './common.css'

const Checkout = ({ price, cart }) => {
    const stripe = useStripe();
    const { user } = useAuth()
    const elements = useElements()
    const [clientSecret, setClientSecret] = useState('')
    const [axiosSecure] = useAxiosSecure()
    const [cardError, setcardError] = useState('')
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('')
    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    setClientSecret(res.data.clientSecret)
                })

        }


    }, [price,axiosSecure])
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return;
        }
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,

        })
        if (error) {
            console.log('error', error)
            setcardError(error.message)
        }
        else {
            setcardError('')
            // console.log('[payment method]',paymentMethod)
        }
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'unknown',
                    name: user?.displayName || 'anonymous'
                },
            }
        }
        )
        if (confirmError) {
            console.log(confirmError);
        }
        console.log('payment intent', paymentIntent)
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {

            setTransactionId(paymentIntent.id)
            //save payment information to the server
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: cart.length,
                items: cart.map(item => item._id),
                status: 'service prnding',
                itemsname: cart.map(item => item.name)
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        //display confirm
                    }
                })
        }

    }
    return (
        <div>
            <form className='w-2/3 mx-auto' onSubmit={handleSubmit}>
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
                <button className='btn btn-primary btn-sm mt-10' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className='text-red-500'>{cardError}</p>}
            {transactionId && <p className='text-green-500'>Transaction complete with {transactionId}</p>}
        </div>
    );
};

export default Checkout;