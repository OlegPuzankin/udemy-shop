import React from 'react';
import './menu-item.style.scss'
import cn from 'classnames'
import {useHistory} from "react-router-dom";

export const MenuItem = ({title, imageUrl, size, linkUrl}) => {

    //console.log(linkUrl)
    const history = useHistory();

    const className = cn({'menu-item': true, [size]: size})
    return (
        <div className={className} onClick={()=>history.push(`/${linkUrl}`)}>
            <div className='background-image' style={{
                backgroundImage: `url(${imageUrl})`
            }}/>
            <dihv className="content">
                <h1 className="title">{title.toUpperCase()} </h1>
                <span className='subtitle'>Order now</span>
            </dihv>
        </div>
    );
};