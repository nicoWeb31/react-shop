import React from 'react';
import './CheckoutItems.style.scss';
import {connect} from 'react-redux';
import { clearItemFromCart } from '../../redux/cart/cart.actions'

const CheckoutItems = ({cartItem,clear}) => {


    const {name,imageUrl,price, quantity} = cartItem;

    return (

    <div className="_checkout-item">
        <div className="_image-container">
            <img src={imageUrl} alt="item"/>
        </div>
        <span className="_name">{name}</span>
        <span className="_quantity">{quantity}</span>
        <span className="_price">{price}</span>
        <div className='_remove-button' onClick={()=>clear(cartItem)}>
            &#10005;
        </div>
        

    </div>


    )
    
};

const mapToDispatchFromProps = dispatch =>({
    clear : (item)=>dispatch(clearItemFromCart(item))
})

export default connect(null,mapToDispatchFromProps)(CheckoutItems);