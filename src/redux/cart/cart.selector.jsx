import {createSelector} from 'reselect';

const selectCart = state => state.cart;

const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)




export const selectCardItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
    cartItems.reduce((accumulatedQuantity,cart)=>
        accumulatedQuantity + cart.quantity
        
    ,0)
)