import React from 'react';
import './cart-icon.style.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {useDispatch, useSelector} from "react-redux";
import {TOGGLE_CART_HIDDEN} from "../../redux/types";
import {selectCartItemsCount} from "../../redux/selectors/cart-selectors";

export const CartIcon = () => {
    const dispatch = useDispatch();
    const cartItemsCount = useSelector(selectCartItemsCount)

 return (
  <div className='cart-icon' onClick={()=>dispatch({type:TOGGLE_CART_HIDDEN})}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='items-count'>{cartItemsCount}</span>
  </div>
 );
};