import React from 'react';
import './header.style.scss'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase.utils'
import {useSelector} from "react-redux";
import {CartIcon} from "../cart-icon/cart-icon.component";
import {CartDropdown} from "../cart-dropdown/cart-dropdown.component";
import {selectCurrentUser} from "../../redux/selectors/user-selectors";
import {selectCartHidden} from "../../redux/selectors/cart-selectors";

export const Header = () => {

    const currentUser = useSelector(selectCurrentUser);
    const cartHidden = useSelector(selectCartHidden);

    //console.log('currentUser',currentUser);

    return (
        <div className='header'>
            <Link className='logo-container' to={'/'}>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link to={'/shop'} className='option'>SHOP</Link>
                <Link to={'/contact'} className='option'>CONTACTS</Link>
                {
                    currentUser
                        ? <div onClick={() => auth.signOut()} className='option'>SIGN OUT</div>
                        : <Link className='option' to={'/auth'}>SIGN IN</Link>
                }
                <CartIcon/>
            </div>
            {
                cartHidden ? null : <CartDropdown/>
            }


        </div>
    );
};