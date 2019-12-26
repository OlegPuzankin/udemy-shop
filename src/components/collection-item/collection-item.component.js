import React from 'react';
import './collection-item.style.scss'
import {UserButton} from "../user-button/user-button.component";
import {useDispatch} from "react-redux";
import {ADD_ITEM_TO_CART} from "../../redux/types";


export const CollectionItem = ({item}) => {
    const dispatch=useDispatch();
    const {imageUrl, name, price}=item;

    function addItem(item) {
        dispatch({
            type:ADD_ITEM_TO_CART,
            payload:item
        })
    }
    return (
        <div className='collection-item'>
            <div className='image'
                 style={{
                     backgroundImage: `url(${imageUrl})`
                 }}/>

            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>

            </div>
            <UserButton inverted onClick={()=>addItem(item)}>Add to cart</UserButton>

        </div>

    );
};