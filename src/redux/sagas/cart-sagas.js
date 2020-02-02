import { takeLatest, put, call, all } from 'redux-saga/effects'
import { CLEAR_CART, SIGN_OUT_SUCCESS, ADD_ITEM_TO_CART } from "../types";


function* clearCart() {
    yield put({ type: CLEAR_CART })
}


export function* onSignOutSuccess() {
    yield takeLatest(SIGN_OUT_SUCCESS, clearCart)
}

function* addItemtoCart() {
    debugger
    let msg=yield 'hello saga'
    console.log(msg)
    msg= yield ' second msg' 
    console.log(msg)
}

export function* onAddItemToCart() {
    yield takeLatest(ADD_ITEM_TO_CART, addItemtoCart)
}

export function* cartSagas() {
    yield all([
        call(onSignOutSuccess),
        call(onAddItemToCart)
    ])
}