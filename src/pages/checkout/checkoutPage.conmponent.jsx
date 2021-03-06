import "./checkoutPage.style.scss"
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect' ;
import { selectCartItems, selectCardTotal } from '../../redux/cart/cart.selector';
import CheckoutItems from "../../component/checkout-item/CheckoutItems.component";
import StripeButton from "../../component/stripe-button/StripeButton.component";



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
            <CheckoutItems cartItem={cartItem} key={cartItem.id}/>
        ))
    }

    <div className='_total'>

    </div>
        <span>
            TOTAL : ${cartTotalPrice}
        </span>
        <div className="_test-warning">
            *please use the folloawing test credit card for payment*
            <br/>
            4242 4242 4242 4242 -Exp! 01/20 -CVV: 123
        </div>
        <StripeButton price={cartTotalPrice}/>
    </div>
);


const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    cartTotalPrice : selectCardTotal
})



export default connect(mapStateToProps)(checkoutPage);

