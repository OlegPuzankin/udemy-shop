import React from 'react';
import './authpage.style.scss'
import {SignInComponent} from "../../components/sign-in/sign-in.component";

export const AuthPage = (props) => {
 return (
  <div className='auth'>
      <SignInComponent/>
  </div>
 );
};