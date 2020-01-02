import React from 'react';
import './user-button.style.scss'
import cn from 'classnames'

export const UserButton = ({children, isSignWithGoogle, inverted, ...otherProps}) => {
 return (

   <button className={cn('user-button', {'sign-with-google':isSignWithGoogle}, {'inverted': inverted})} {...otherProps}>
       {children}
   </button>

 );
};