import React from 'react';
import './user-button.style.scss'

export const UserButton = ({children, ...otherProps}) => {
 return (

   <button className={'user-button'} {...otherProps}>
       {children}
   </button>

 );
};