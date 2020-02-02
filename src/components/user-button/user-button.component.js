import React from 'react';
import './user-button.style.scss'
import {UserButtonContainer} from "./user-button.styles";

export const UserButton = ({ children, ...props }) => (
    <UserButtonContainer {...props}>{children}</UserButtonContainer>);



