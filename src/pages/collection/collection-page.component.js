import React from 'react';
import './collection-page.styles.scss'
import {connect, useSelector} from "react-redux";
import {
    selectCollection,
    selectIsCollectionsLoaded
} from "../../redux/selectors/shop-selectors";
import {CollectionItem} from "../../components/collection-item/collection-item.component";
import {compose} from "redux";
import {createStructuredSelector} from "reselect";
import {WithSpinner} from "../../components/with-spinner/with-spinner.component";

const Collection = ({match}) => {
    const {title, items} = useSelector(selectCollection(match.params.collectionId));
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {items.map(item => <CollectionItem key={item.id} item={item}/>)}
            </div>
        </div>
    );
};

const mapStateToProps=createStructuredSelector({
    isLoading:state=>!selectIsCollectionsLoaded(state)
});

export const CollectionContainer=compose(
    connect(mapStateToProps),
    WithSpinner
)(Collection);