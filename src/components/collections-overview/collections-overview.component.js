import React from 'react';
import './collections-overview.styles.scss'
import {PreviewCollection} from "../preview-collection/preview-collection.component";
import {connect, useSelector} from "react-redux";
import {selectCollectionPreview, selectIsCollectionsFetching} from "../../redux/selectors/shop-selectors";
import {WithSpinner} from "../../components/with-spinner/with-spinner.component";
import {createStructuredSelector} from "reselect";
import {compose} from "redux";


const CollectionsOverview = (props) => {
    console.log('collection overview props', props)

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

const mapStateToProps=createStructuredSelector({
    isLoading:selectIsCollectionsFetching
});

export const CollectionOverviewContainer= compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);
