import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const Checkout = () => {
    const stripe=useStripe();
    const elements=useElements()
    const [cardError,setcardError]=useState('')
    const handleSubmit=async(event)=>{
        event.preventDefault();
        if(!stripe||!elements){
            return;
        }
        const card=elements.getElement(CardElement)
        if(card== null){
            return;
        }
        const {error,paymentMethod}=await stripe.createPaymentMethod({
            type:'card',
            card,

        })
        if(error){
            console.log('[error]',error)
            setcardError(error.message)
        }
        else{
            console.log('[payment method]',paymentMethod)
            setcardError('')
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
                <button className='btn btn-primary btn-sm mt-10' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {cardError && <p className='text-red-500'>{cardError}</p>}
        </div>
    );
};

export default Checkout;