import React from 'react';
import "./CardItem.style.scss"


const CartItem = ({item:{name,imageUrl,price,quantity}}) => (
    <div className="_cart-item">
    <img src={imageUrl} alt="item"/>
    <div className="_item-details">
        <span className='_name'>{name}</span>
        <span className='_price'>{quantity} x {price}</span>

    </div>

    </div>
);

export default CartItem;