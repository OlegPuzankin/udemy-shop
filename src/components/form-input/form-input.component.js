import React from 'react';
import './form-input.style.scss'
import cn from 'classnames'

export const FormInput = ({handleChange, label, ...otherProps}) => {

    const labelClassName = cn({shrink:otherProps.value.length}, 'form-input-label')
    return (
        <div className='group'>
            <input className='form-input' onChange={handleChange} {...otherProps}/>
            {label ?(
                <label className={labelClassName}>
                    {label}
                </label>)
                : null
            }

        </div>
    );
};



{/*<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>*/}
{/*    {label}*/}
{/*</label>)*/}