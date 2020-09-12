import {CartActionTypes} from './cart.types'

export const toggleCardHidden = () => ({
    type: CartActionTypes.TOGGLE_CARD_HIDDEN
})

export const addItemsToCart = item =>({
    type:CartActionTypes.ADD_ITEM,
    payload:item
})

export const clearItemFromCart = item =>({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload:item
})