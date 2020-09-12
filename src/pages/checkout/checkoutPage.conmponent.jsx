import "./checkoutPage.style.scss"
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect' ;
import { selectCartItems, selectCardTotal } from '../../redux/cart/cart.selector';
import CheckoutItems from "../../component/checkout-item/CheckoutItems.component";



const checkoutPage = ({cartItems,cartTotalPrice}) => (
    <div className="_checkout-page">
    <div className="_checkout-header">
        <div className="_header-block">
            <span>Product</span>
        </div>
        <div className="_header-block">
            <span>Description</span>
        </div>
        <div className="_header-block">
            <span>Quantity</span>
        </div>
        <div className="_header-block">
            <span>Price</span>
        </div>
        <div className="_header-block">
            <span>Remove</span>
        </div>
    </div>
    {
        cartItems.map(cartItem =>(
            <CheckoutItems cartItem={cartItem} />
        ))
    }

    <div className='_total'>

    </div>
        <span>
            TOTAL : ${cartTotalPrice}
        </span>
    </div>
);


const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    cartTotalPrice : selectCardTotal
})



export default connect(mapStateToProps)(checkoutPage);

