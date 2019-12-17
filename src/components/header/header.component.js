import React from 'react';
import './header.style.scss'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase.utils'

export const Header = ({currentUser}) => {
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
                        ? <div onClick={() =>auth.signOut()} className='option'>SIGN OUT</div>
                        :<Link className='option' to={'/auth'}>SIGN IN</Link>
                }


            </div>


        </div>
    );
};