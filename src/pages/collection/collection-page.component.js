import React from 'react';
import './collection-page.styles.scss'
import {useSelector} from "react-redux";
import {selectCollection} from "../../redux/selectors/shop-selectors";
import {CollectionItem} from "../../components/collection-item/collection-item.component";


export const Collection = ({match}) => {
    // console.log('collection match', match);

    const {title, items} = useSelector(selectCollection(match.params.collectionId));


    //console.log('collection',collection)


    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {items.map(item=><CollectionItem key={item.id} item={item}/>)}
            </div>


        </div>
    );
};