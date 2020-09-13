import {createSelector} from 'reselect';

const selectShop = state =>state.shop;

export const ShopSelect = createSelector(
    [selectShop],
    shop => shop.collection

)