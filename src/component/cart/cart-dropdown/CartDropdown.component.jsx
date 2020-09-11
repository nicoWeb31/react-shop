import React from 'react';
import CartItem from '../../card-item/CartItem.component';
import ButtonCustom from '../../form/ButtonCustom.component'
import "./CartDrodown.style.scss";
import { connect } from 'react-redux';
import {selectCartItems} from "../../../redux/cart/cart.selector";
import {createStructuredSelector} from "reselect"



const CartDropdown = ({ items }) => (
    <div className='_cart-dropdown'>
        <div className="_cart-items">

            {
                items.map((item) =>
                    <CartItem item={item} key={item.id} />
                )

            }
        </div>

        <ButtonCustom >GO TO CHECKOUT</ButtonCustom>
    </div>

);

const mapStateToProps = createStructuredSelector({
    //use selector
    items: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);


