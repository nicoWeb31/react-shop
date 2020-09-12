import React from 'react';
import CartItem from '../../card-item/CartItem.component';
import ButtonCustom from '../../form/ButtonCustom.component'
import "./CartDrodown.style.scss";
import { connect } from 'react-redux';
import {selectCartItems} from "../../../redux/cart/cart.selector";
import {createStructuredSelector} from "reselect";
import {withRouter} from 'react-router-dom';
import { toggleCardHidden } from '../../../redux/cart/cart.actions';




const CartDropdown = ({ items, history,toogle }) => (
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

        <ButtonCustom onClick={()=>{
            toogle()
            history.push('/chekout')
            }}>
            GO TO CHECKOUT
            </ButtonCustom>
    </div>

);

const mapStateToProps = createStructuredSelector({
    //use selector
    items: selectCartItems
})

const mapDispatchToProps = dispatch => ({
    toogle : ()=>dispatch(toggleCardHidden())
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CartDropdown));


