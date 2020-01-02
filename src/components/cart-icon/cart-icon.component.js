import React from 'react';
import './cart-icon.style.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {useDispatch, useSelector} from "react-redux";
import {selectCartItemsCount} from "../../redux/selectors/cart-selectors";
import {toggleCartHidden} from "../../redux/actions/cart-actions";

export const CartIcon = () => {
    const dispatch = useDispatch();
    const cartItemsCount = useSelector(selectCartItemsCount)

 return (
  <div className='cart-icon' onClick={()=>dispatch(toggleCartHidden())}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='items-count'>{cartItemsCount}</span>
  </div>
 );
};