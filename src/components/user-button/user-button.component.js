import React from 'react';
import './user-button.style.scss'
import cn from 'classnames'

export const UserButton = ({children, isSignWithGoogle, ...otherProps}) => {
 return (

   <button className={cn('user-button', {'sign-with-google':isSignWithGoogle})} {...otherProps}>
       {children}
   </button>

 );
};