import './Collection.style.scss'
import React from 'react';
import CollectionItems from '../../../component/collection-item/CollectionItems.component';
import {selectCollection} from "../../../redux/shop/shop.selector";
import {connect} from 'react-redux';

const Collection = ({ collection }) => (
    <div className='_collection-page'>

        <CollectionItems />
    </div>
);

const mapStateToProps = (state,ownProps) =>({
    collection : selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection);
