import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PreviewCollection from "../../component/preview-collection/PreviewCollection.component";
import { ShopSelect } from '../../redux/shop/shop.selector';


const ShopPage = ({shop}) => {

    return (
        <div className="_shop-page">
        <h1>shop</h1>
            {
                shop.map(({id,...otherProps}) => (

                    
                    <PreviewCollection key={id} {...otherProps} />
                ))
                
            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    shop:ShopSelect
})

export default connect(mapStateToProps)(ShopPage);