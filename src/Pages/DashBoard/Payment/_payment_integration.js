/**
 * 1. install stripe and react stripe js
 * 2.create a checkout form with card element (card element contain card number,expriation date ,cvs,zip code)
 * 3.create an account on stripe and get the publishabel key pk
 * 4.get card information
 * 5.create a pyment method
 * 6.use test cart to test payment
 * 7.on the serverside :install stripe 
 * npm install --save stripe
 * 8.creat a payment intent api with payment method types:['card']
 * make sure you provide amount in cents (multiply price with 100)
 * 9.call payment intent api to get secret and store it in state
 * 10.use confirmcardpayment api with client secret card info
 * 11.display confirm card error
 * 12.display confirm card success
 * 13.do things after payment --->
 * 
 * 
 * 
 */