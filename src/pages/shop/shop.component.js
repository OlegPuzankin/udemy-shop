import React from 'react'
import {CollectionsOverview} from "../../components/collections-overview/collections-overview.component";
import {Route} from "react-router-dom";
import {Collection} from "../collection/collection-page.component";
import {useDispatch, useSelector} from "react-redux";
// import {updateShopCollections} from "../../redux/actions/shop-actions";
import {WithSpinner} from "../../components/with-spinner/with-spinner.component";
import {selectIsCollectionsLoaded} from "../../redux/selectors/shop-selectors";
import {fetchCollectionsStartAsync} from "../../redux/actions/shop-actions";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(Collection);

export function ShopPage({match}) {

    const dispatch = useDispatch();
    const isCollectionsLoaded=useSelector(selectIsCollectionsLoaded)

    React.useEffect(() => {
       dispatch(fetchCollectionsStartAsync())
    }, []);

    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`}
                   render={props => <CollectionsOverviewWithSpinner isLoading={!isCollectionsLoaded} {...props}/>}/>
            <Route path={`${match.path}/:collectionId`}
                   render={props => <CollectionWithSpinner isLoading={!isCollectionsLoaded} {...props}/>}/>
        </div>
    )

}

