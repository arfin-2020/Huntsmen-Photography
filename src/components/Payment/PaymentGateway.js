import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Sidebar from '../Sidebar/Sidebar';
import PaymentCard from './PaymentCard';
const stripePromise = loadStripe('pk_test_51IeGsCLEjhlpQHYHTTpyGYC7J8vVFhBjez8P37PGzl4QzYwAdUO1DYiDnMWOImx7Vji9wGaSppkbmdWRxjxRmCGT00FWKum5X8');

const PaymentGateway = () => {
    return (
        <div className ='row container-fluid'>
            <Sidebar/>
            <div className="col-md-10 p-4 pr-5 w-75" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <h1>Pay Your Order...</h1>
            <Elements stripe={stripePromise}>
               <PaymentCard/>
            </Elements>
            </div>
        </div>
    );
};

export default PaymentGateway;