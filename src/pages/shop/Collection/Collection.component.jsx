import './Collection.style.scss'
import React from 'react';
import CollectionItems from '../../../component/collection-item/CollectionItems.component';
import {selectCollection} from "../../../redux/shop/shop.selector";
import {connect} from 'react-redux';

const Collection = ({ collection }) =>{

    const {title,items} = collection;
    return (
        <div className='_collection-page'>
    
            <h2 className="_title">{title}</h2>
            <div className="_items">
                {
                    items.map(item =>
                        <CollectionItems key={item.id} item={item}/>
                    )
                }
            </div>
        </div>
    );

} 

const mapStateToProps = (state,ownProps) =>({
    collection : selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection);
