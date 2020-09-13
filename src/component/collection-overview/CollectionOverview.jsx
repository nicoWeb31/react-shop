import './CollectionOverview.style.scss'
import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import PreviewCollection from "../../component/preview-collection/PreviewCollection.component";
import { ShopSelect } from '../../redux/shop/shop.selector';




const CollectionOverview = ({shop}) => (
    <div className='_collection-overview'>
            {
                shop.map(({id,...otherProps}) => (
                    <PreviewCollection key={id} {...otherProps} />
                ))
                
            }
    </div>
);


const mapStateToProps = createStructuredSelector({
    shop: ShopSelect
})

export default connect(mapStateToProps)(CollectionOverview);