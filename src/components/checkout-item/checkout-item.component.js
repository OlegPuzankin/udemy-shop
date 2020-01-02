import React from 'react';
import './checkout-item.styles.scss'
import {useDispatch} from "react-redux";
import {addItemToCartAction, clearItemFromCartAction, removeItemFromCartAction} from "../../redux/actions/cart-actions";

export const CheckoutItem = ({cartItem}) => {
    const {name, quantity, price, imageUrl} = cartItem;
    const dispatch = useDispatch();


    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt="item"/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                    <div className='arrow' onClick={()=>dispatch(removeItemFromCartAction(cartItem))}>&#10094;</div>
                    <span className='value'> {quantity} </span>
                    <div className='arrow' onClick={() => dispatch(addItemToCartAction(cartItem))}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => dispatch(clearItemFromCartAction(cartItem))}>&#10006;</div>
        </div>
    );
};