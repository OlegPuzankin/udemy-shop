export function addItemToCart(cartItems, itemToCart) {

    const existingItem = cartItems.find(item => item.id === itemToCart.id);

    if (existingItem) {
        return cartItems.map(item => {
            return item.id === existingItem.id
                ? {...item, quantity: item.quantity + 1}
                : item
        })
    }

    return [...cartItems, {...itemToCart, quantity: 1}]

}

export function removeItemFromCart(cartItems, itemToRemoveFromCart) {
    debugger
    const existingItem = cartItems.find(item => item.id === itemToRemoveFromCart.id);

    if (existingItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== itemToRemoveFromCart.id)
    }
    return cartItems.map(cartItem => {
        return cartItem.id === itemToRemoveFromCart.id
            ? {...cartItem, quantity: cartItem.quantity - 1}
            :cartItem
    })
}