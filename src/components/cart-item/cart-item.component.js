import React from 'react';
import './cart-item.styles.scss'

export const CartItem = ({cartItem:{imageUrl, name, price, quantity}}) => {
    return (
  <div className='cart-item'>
      <img src={imageUrl} alt="item"/>
      <div className='item-detail'>
          <span className='item-name'>{name}</span>
          <span className='item-price'>{quantity} x ${price}</span>
      </div>

  </div>
 );
};