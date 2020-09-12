export const addItemToCart = (cartItems, cardItemToAdd) => {
    const existingCartItems = cartItems.find(cardItem => cardItem.id === cardItemToAdd.id);

    if (existingCartItems) {
        return cartItems.map(cartItem =>
            cartItem.id === cardItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + +1 } : cartItem
        )
    }

    return [...cartItems, { ...cardItemToAdd, quantity: 1 }]
}



export const removeItem = (cartItems, cartItemToremove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToremove.id
    )

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToremove.id)
    }
    return cartItems.map(
        cartItem =>
            cartItem.id === cartItemToremove.id ? { ...cartItem, quantity: cartItem.quantity - +1} : cartItem
    )
}