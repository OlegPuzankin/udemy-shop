import React from 'react';
import './checkout.styles.scss'
import {useSelector} from "react-redux";
import {selectCartItems, selectCartTotal} from "../../redux/selectors/cart-selectors";
import {CheckoutItem} from "../../components/checkout-item/checkout-item.component";

export const Checkout = (props) => {
    const cartItems = useSelector(selectCartItems);
    const totalCost=useSelector(selectCartTotal);
 return (
  <div className='checkout-page'>
      <div className='checkout-header'>
          <span className='header-block'>
              Product
          </span>
          <span className='header-block'>
              Description
          </span>
          <span className='header-block'>
              Quantity
          </span>
          <span className='header-block'>
              Price
          </span>
          <span className='header-block'>
              Remove
          </span>
      </div>
      {
          cartItems.map(cartItem=><CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
      }
      <div className='total'>
          <span>Total: ${totalCost}</span>
      </div>

  </div>
 );
};