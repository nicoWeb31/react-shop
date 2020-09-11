import React from 'react';
import CartItem from '../../card-item/CartItem.component';
import ButtonCustom from '../../form/ButtonCustom.component'
import "./CartDrodown.style.scss";
import { connect } from 'react-redux';
import {selectCartItems} from "../../../redux/cart/cart.selector";
import {createStructuredSelector} from "reselect";
import {withRouter} from 'react-router-dom';




const CartDropdown = ({ items, history }) => (
    <div className='_cart-dropdown'>
        <div className="_cart-items">

            {
                items.length ? 

                items.map((item) =>
                    <CartItem item={item} key={item.id} />
                ):
                (
                    <span className="_empty-message">Your card is empty</span>
                )
                

            }
        </div>

        <ButtonCustom onClick={()=>history.push('/chekout')}>GO TO CHECKOUT</ButtonCustom>
    </div>

);

const mapStateToProps = createStructuredSelector({
    //use selector
    items: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));


