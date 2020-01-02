import {ADD_ITEM_TO_CART, CLEAR_ITEM_FROM_CART, REMOVE_ITEM_FROM_CART, TOGGLE_CART_HIDDEN} from "../types";

export function toggleCartHidden() {
    return {
        type:TOGGLE_CART_HIDDEN
    }
}
export function addItemToCartAction(item) {
    return {
        type:ADD_ITEM_TO_CART,
        payload:item
    }
}

export function removeItemFromCartAction(item) {
    return {
        type:REMOVE_ITEM_FROM_CART,
        payload:item
    }
}

export function clearItemFromCartAction(item) {
    return {
        type:CLEAR_ITEM_FROM_CART,
        payload:item
    }
}