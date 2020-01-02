import React from 'react';
import './cart-dropdown.style.scss'
import {UserButton} from "../user-button/user-button.component";
import {useDispatch, useSelector} from "react-redux";
import {CartItem} from "../cart-item/cart-item.component";
import {selectCartItems} from "../../redux/selectors/cart-selectors";
import {useHistory} from 'react-router-dom'
import {toggleCartHidden} from "../../redux/actions/cart-actions";

export const CartDropdown = (props) => {
    const cartItems = useSelector(selectCartItems);
    const history =useHistory();
    const dispatch=useDispatch();


    function handleGoCheckout() {
        history.push('/checkout');
        dispatch(toggleCartHidden())
    }
    //debugger

    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length
                        ? cartItems.map(cartItem => (<CartItem key={cartItem.id} cartItem={cartItem}/>))
                        : <span className='empty-cart-message'>empty cart</span>
                }

            </div>
            <UserButton onClick={handleGoCheckout}>GO TO CHECKOUT</UserButton>
        </div>
    );
};