import React from 'react';
import CollectionOverview from '../../component/collection-overview/CollectionOverview';
import { Route } from 'react-router-dom';
import Collection from './Collection/Collection.component' 


const ShopPage = ( {match} ) => {

    return (
        <div className="_shop-page">
        <h1>shop</h1>
            
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route exact path={`${match.path}/collection:id`} component={Collection}/>

        </div>
    );
}



export default ShopPage;