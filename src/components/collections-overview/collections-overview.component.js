import React from 'react';
import './collections-overview.styles.scss'
import {PreviewCollection} from "../preview-collection/preview-collection.component";
import {useSelector} from "react-redux";
import {selectCollectionPreview} from "../../redux/selectors/shop-selectors";

export const CollectionsOverview = () => {

    const collections = useSelector(selectCollectionPreview);
    //const collections2 = useSelector(selectCollections);
   //debugger


    return (
        <div className='collection-overview'>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <PreviewCollection key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    );
};