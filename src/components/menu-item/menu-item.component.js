import React from 'react';
import './menu-item.style.scss'
import cn from 'classnames'

export const MenuItem = ({title, imageUrl, size}) => {

    const className = cn({'menu-item': true, [size]: size})
    return (
        <div className={className}>
            <div className='background-image' style={{
                backgroundImage: `url(${imageUrl})`
            }}/>
            <div className="content">
                <h1 className="title">{title.toUpperCase()} </h1>
                <span className='subtitle'>Order now</span>
            </div>
        </div>
    );
};