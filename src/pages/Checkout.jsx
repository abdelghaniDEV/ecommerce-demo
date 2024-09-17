import React from 'react'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from '../componnent/CheckoutForm';

function Checkout() {

  
  return (
    
       <CheckoutForm />
    
  )
}

export default Checkout