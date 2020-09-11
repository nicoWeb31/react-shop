import React from 'react';
import {ReactComponent as ShoppingIcon} from "../../asset/logo/shopping-bag.svg"
import "./card-icon.style.scss";
import { connect } from 'react-redux';
import {toggleCardHidden} from "../../redux/cart/cart.actions";
import {selectCardItemsCount} from "../../redux/cart/cart.selector";

const CardIcon = ({toggle,itemCount}) => {
    return (
        <div className="_cart-icon" onClick={toggle}>
        <ShoppingIcon className="_shopping-icon"/>
        <span className="_item-count">{itemCount}</span>

        </div>
    );
}


const mapStateToProps = state =>({
    itemCount : selectCardItemsCount(state)
})

const mapDispatchToProps = dispatch =>({
    toggle: ()=>dispatch(toggleCardHidden())
})

export default connect(mapStateToProps,mapDispatchToProps)(CardIcon);