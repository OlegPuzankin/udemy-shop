import React from 'react';
// import './collection-item.style.scss'
import {useDispatch} from "react-redux";
import {addItemToCartAction} from "../../redux/actions/cart-actions";
import {
    AddButton,
    CollectionItemContainer,
    CollectionItemFooter,
    CollectionItemName,
    CollectionItemPrice,
    CollectionItemImage
} from './collection-item.styles'


export const CollectionItem = ({item}) => {
    const dispatch = useDispatch();
    const {imageUrl, name, price} = item;


    return (
        <CollectionItemContainer>
            <CollectionItemImage className='image' imageUrl={imageUrl}/>

            <CollectionItemFooter >
                <CollectionItemName>{name}</CollectionItemName>
                <CollectionItemPrice>{price}</CollectionItemPrice>

            </CollectionItemFooter>
            <AddButton inverted onClick={() => dispatch(addItemToCartAction(item))}>Add to cart</AddButton>

        </CollectionItemContainer>

    );
};