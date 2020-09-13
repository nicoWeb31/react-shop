import {createSelector} from 'reselect';
import memoize from 'lodash.memoize';


const selectShop = state =>state.shop;

const COLLECTION_ID_MAP ={
    hats:1,
    sneakers:2,
    jackets:3,
    womens:4,
    mens:5
}

export const ShopSelect = createSelector(
    [selectShop],
    shop => shop.collection

)


export const selectCollection = memoize((collectionUrlParam) =>
createSelector(
    [ShopSelect],
    collection =>collection.find(c => c.id === COLLECTION_ID_MAP[collectionUrlParam])
)
)