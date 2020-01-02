import React from 'react'
import {CollectionsOverview} from "../../components/collections-overview/collections-overview.component";
import {Route} from "react-router-dom";
import {Collection} from "../collection/collection-page.component";
import {convertCollectionSnapshotToMap, firestore} from "../../firebase/firebase.utils";
import {useDispatch} from "react-redux";
import {updateShopCollections} from "../../redux/actions/shop-actions";
import {WithSpinner} from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(Collection);

export function ShopPage({match}) {

    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = React.useState(true);

    //console.log('props from ShopPage',match)
    React.useEffect(() => {
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionSnapshotToMap(snapshot);
            dispatch(updateShopCollections(collectionsMap));
            setIsLoading(false)
            // console.log('collectionMap',collectionsMap)
        })

    }, []);

    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`}
                   render={props => <CollectionsOverviewWithSpinner isLoading={isLoading} {...props}/>}/>
            <Route path={`${match.path}/:collectionId`}
                   render={props => <CollectionWithSpinner isLoading={isLoading} {...props}/>}/>
        </div>
    )

}

