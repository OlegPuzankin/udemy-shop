import React from 'react';
import {SpinnerContainer, SpinnerOverlay} from './swith-spinner.styles'

export const WithSpinner = (WrappedComponent) => ({isLoading, ...otherProps}) => {
    //console.log('other', otherProps)
    return isLoading
        ?
        (<SpinnerOverlay>
                <SpinnerContainer/>
            </SpinnerOverlay>)
        :<WrappedComponent {...otherProps}/>
};