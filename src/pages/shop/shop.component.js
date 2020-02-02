import React from 'react'
import {CollectionOverviewContainer} from "../../components/collections-overview/collections-overview.component";
import {Route} from "react-router-dom";
import {CollectionContainer} from "../collection/collection-page.component";
import {useDispatch} from "react-redux";
// import {updateShopCollections} from "../../redux/actions/shop-actions";
import {fetchCollectionsStart} from "../../redux/actions/shop-actions";

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
// const CollectionWithSpinner = WithSpinner(Collection);

export function ShopPage({match}) {
    const dispatch = useDispatch();

    // const isCollectionsLoaded=useSelector(selectIsCollectionsLoaded);
    // const isCollectionsFetching=useSelector(selectIsCollectionsFetching)

    React.useEffect(() => {
       dispatch(fetchCollectionsStart())
    }, [dispatch]);

    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`}
                   component={CollectionOverviewContainer}/>
            <Route path={`${match.path}/:collectionId`}
                   component={CollectionContainer}/>}/>
        </div>
    )

}

