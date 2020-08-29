import React from 'react';
import { useState } from 'react';
import SHOP_DATA from './shop.data';
import PreviewCollection from "../../component/preview-collection/PreviewCollection.component"


const ShopPage = (props) => {


    const [collections, setCollections] = useState(SHOP_DATA);


    return (
        <div className="_shop-page">
        <h1>shop</h1>
            {
                collections.map(({id,...otherProps}) => (

                    
                    <PreviewCollection key={id} {...otherProps} />
                ))
                
            }
        </div>
    );
}

export default ShopPage;