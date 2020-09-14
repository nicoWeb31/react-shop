import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishKey = 'pk_test_51HRKdeA61x8iFQGwNAQHs0z00n033hztv9zXnMHg3W5xCvWKRaLIkWpKtC7Pyz2Udj1txNtOxqQm09GasBhe1uFD00XgRMVLuv';

    const onToken = token =>{
        console.log(token)
        alert('Payement Successful')
    }

    return (
        <StripeCheckout 
            label="Pay Now"
            name="CRWN Clothing LDT"
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your Total is ${price} $`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishKey}
        />
    )
}; 

export default StripeButton;