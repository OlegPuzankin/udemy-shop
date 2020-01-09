import React from 'react';
import './header.style.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {useDispatch, useSelector} from "react-redux";
import {CartIcon} from "../cart-icon/cart-icon.component";
import {CartDropdown} from "../cart-dropdown/cart-dropdown.component";
import {selectCurrentUser} from "../../redux/selectors/user-selectors";
import {selectCartHidden} from "../../redux/selectors/cart-selectors";
import {HeaderContainer, LogoContainer, OptionDiv, OptionLink, OptionsContainer} from './header.styles'
import {signOutStart} from "../../redux/actions/user-actions";

export const Header = () => {

    const currentUser = useSelector(selectCurrentUser);
    const cartHidden = useSelector(selectCartHidden);
    const dispatch = useDispatch();

    //console.log('currentUser',currentUser);

    return (
        <HeaderContainer>
            <LogoContainer to={'/'}>
                <Logo className='logo'/>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to={'/shop'} >SHOP</OptionLink>
                <OptionLink to={'/contact'} >CONTACTS</OptionLink>
                {
                    currentUser
                        ? <OptionDiv onClick={() => dispatch(signOutStart())} >SIGN OUT</OptionDiv>
                        : <OptionLink to={'/auth'}>SIGN IN</OptionLink>
                }
                <CartIcon/>
            </OptionsContainer>
            {
                cartHidden ? null : <CartDropdown/>
            }
        </HeaderContainer>
    );
};