import React from 'react';
import "./CollectionItems.style.scss";
import ButtonCustom from "../form/ButtonCustom.component";
import {connect} from "react-redux";
import {addItemsToCart} from "../../redux/cart/cart.actions";

const CollectionItems = ({item,addItem }) => {

    const { name, imageUrl, price } = item;

    const styleImage = {
        backgroundImage: `url(${imageUrl})`
    }

    return (
        <div className="_collection-item">

            <div className="_image" style={styleImage}>

            </div>
            <div className="_collection-footer">

                <span className="_name">{name}</span>
                <span className="_price">{price}</span>

            </div>
            <ButtonCustom inverted onClick={()=>addItem(item)}> Add to cart</ButtonCustom>


        </div>
    );
}

const mapDispatchToProps = dispatch =>({
addItem : item => dispatch(addItemsToCart(item))
}) 

export default connect(null,mapDispatchToProps)(CollectionItems);