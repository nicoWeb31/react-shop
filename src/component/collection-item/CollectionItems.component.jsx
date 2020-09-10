import React from 'react';
import "./CollectionItems.style.scss";
import ButtonCustom from "../form/ButtonCustom.component";

const CollectionItems = ({ id, name, imageUrl, price }) => {

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
            <ButtonCustom inverted > Add to cart</ButtonCustom>


        </div>
    );
}

export default CollectionItems;