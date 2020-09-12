import React from 'react';
import './CheckoutItems.style.scss';

const CheckoutItems = ({cartItem :{name,imageUrl,price, quantity}}) => (
    <div className="_checkout-item">
        <div className="_image-container">
            <img src={imageUrl} alt="item"/>
        </div>
        <span className="_name">{name}</span>
        <span className="_quantity">{quantity}</span>
        <span className="_price">{price}</span>
        <div className='_remove-button'>
            &#10005;
        </div>
        

    </div>
);

export default CheckoutItems;