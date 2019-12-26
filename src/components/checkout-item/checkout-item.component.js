import React from 'react';
import './checkout-item.styles.scss'
import {useDispatch} from "react-redux";
import {ADD_ITEM_TO_CART, CLEAR_ITEM_FROM_CART, REMOVE_ITEM_FROM_CART} from "../../redux/types";

export const CheckoutItem = ({cartItem}) => {
    const {name, quantity, price, imageUrl} = cartItem;
    const dispatch = useDispatch();

    function handleRemoveItem(cartItem) {
        dispatch({type: CLEAR_ITEM_FROM_CART, payload: cartItem})
    }
    function handleIncreaseQuantity() {
        dispatch({type:ADD_ITEM_TO_CART, payload: cartItem})
    }
    function handleDecreaseQuantity() {
        dispatch({type:REMOVE_ITEM_FROM_CART, payload: cartItem})
    }

    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt="item"/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                    <div className='arrow' onClick={handleDecreaseQuantity}>&#10094;</div>
                    <span className='value'> {quantity} </span>
                    <div className='arrow' onClick={handleIncreaseQuantity}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => handleRemoveItem(cartItem)}>&#10006;</div>
        </div>
    );
};