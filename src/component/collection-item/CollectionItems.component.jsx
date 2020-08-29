import React from 'react';
import "./CollectionItems.style.scss";

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


        </div>
    );
}

export default CollectionItems;