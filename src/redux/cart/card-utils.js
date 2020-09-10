export  const addItemToCart = (cartItems, cardItemToAdd) =>{
    const existingCartItems = cartItems.find(cardItem => cardItem.id === cardItemToAdd.id );

    if(existingCartItems){
        return cartItems.map(cartItem =>
            cartItem.id === cardItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + +1} : cartItem
        )
    }

    return [...cartItems,{...cardItemToAdd, quantity: 1}]
}