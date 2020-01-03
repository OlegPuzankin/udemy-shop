import {FETCH_COLLECTIONS_FAIL, FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS} from "../types";
import {convertCollectionSnapshotToMap, firestore} from "../../firebase/firebase.utils";

export function fetchCollectionsStart() {
    return{
        type:FETCH_COLLECTIONS_START,
    }
}

export function fetchCollectionsSuccess(collectionMap) {
    return{
        type:FETCH_COLLECTIONS_SUCCESS,
        payload:collectionMap
    }
}
export function fetchCollectionsFail(errorMessage) {
    return{
        type:FETCH_COLLECTIONS_FAIL,
        payload:errorMessage
    }
}


export function fetchCollectionsStartAsync() {
    return dispatch=>{
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());
        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionsMap));
        }).catch(e=>dispatch(fetchCollectionsFail(e.message)))
    }
}