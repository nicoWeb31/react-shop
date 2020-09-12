import React from 'react';
import './CheckoutItems.style.scss';
import { connect } from 'react-redux';
import { clearItemFromCart,removeItem,addItemsToCart } from '../../redux/cart/cart.actions'

const CheckoutItems = ({ cartItem, clear, removeItem, addItem }) => {


    const { name, imageUrl, price, quantity } = cartItem;

    return (

        <div className="_checkout-item">
            <div className="_image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="_name">{name}</span>
            <span className="_quantity">
                <div className="_arrow" onClick={()=>removeItem(cartItem)}>

                    &#10094;
                </div>
                <span className="_value" >
                    {quantity}
                </span>


                <div className="_arrow" onClick={()=>addItem(cartItem)}>
                    &#10095;
                </div>

            </span>
            <span className="_price">{price}</span>
            <div className='_remove-button' onClick={() => clear(cartItem)}>
                &#10005;
        </div>


        </div>


    )

};

const mapToDispatchFromProps = dispatch => ({
    clear: (item) => dispatch(clearItemFromCart(item)),
    removeItem : (item) =>dispatch(removeItem(item)),
    addItem: (item)=>dispatch(addItemsToCart(item))
})

export default connect(null, mapToDispatchFromProps)(CheckoutItems);