import React from 'react';
import './collection-item.style.scss'
import {UserButton} from "../user-button/user-button.component";
import {useDispatch} from "react-redux";
import {addItemToCartAction} from "../../redux/actions/cart-actions";


export const CollectionItem = ({item}) => {
    const dispatch=useDispatch();
    const {imageUrl, name, price}=item;


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
            <UserButton inverted onClick={()=>dispatch(addItemToCartAction(item))}>Add to cart</UserButton>

        </div>

    );
};