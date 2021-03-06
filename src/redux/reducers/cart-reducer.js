import {ADD_ITEM_TO_CART, CLEAR_CART, CLEAR_ITEM_FROM_CART, REMOVE_ITEM_FROM_CART, TOGGLE_CART_HIDDEN} from "../types";
import {addItemToCart, removeItemFromCart} from "../functions/cart-functions";

const INITIAL_STATE={
    hidden: true,
    cartItems: []
};

export  function cartReducer(state=INITIAL_STATE, action){
    const {payload} =action;
    switch (action.type) {

        case TOGGLE_CART_HIDDEN:
            return {
                ...state, hidden: !state.hidden
            };
        case ADD_ITEM_TO_CART:
            debugger
            return {
                ...state, cartItems: addItemToCart(state.cartItems, payload)
            };
        case REMOVE_ITEM_FROM_CART:
            return {
                ...state, cartItems: removeItemFromCart(state.cartItems, payload)
            };
        case CLEAR_ITEM_FROM_CART:
            return{
                ...state, cartItems: state.cartItems.filter(cartItem=>cartItem.id!==payload.id)
            };

        case CLEAR_CART:
            return{
                ...state, cartItems: []
            };

        default:
            return state

    }


}