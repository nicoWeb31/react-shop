import React from 'react';
import {ReactComponent as ShoppingIcon} from "../../asset/logo/shopping-bag.svg"
import "./card-icon.style.scss";
import { connect } from 'react-redux';
import {toggleCardHidden} from "../../redux/cart/cart.actions"

const CardIcon = ({toggle}) => {
    return (
        <div className="_cart-icon" onClick={toggle}>
        <ShoppingIcon className="_shopping-icon"/>
        <span className="_item-count">0</span>

        </div>
    );
}


const mapDispatchToProps = dispatch =>({
    toggle: ()=>dispatch(toggleCardHidden())
})

export default connect(null,mapDispatchToProps)(CardIcon);