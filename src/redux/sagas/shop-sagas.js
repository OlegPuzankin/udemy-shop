import {takeEvery, put, call, all} from 'redux-saga/effects'
import {FETCH_COLLECTIONS_START} from "../types";
import {convertCollectionSnapshotToMap, firestore} from "../../firebase/firebase.utils";
import {fetchCollectionsFail, fetchCollectionsSuccess} from "../actions/shop-actions";

function* fetchCollectionsStartAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionMap = yield call(convertCollectionSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionMap))

    } catch (e) {
        yield put(fetchCollectionsFail(e.message))
    }
}

export function* fetchCollectionsStart() {
    yield takeEvery(FETCH_COLLECTIONS_START, fetchCollectionsStartAsync)
}


export function* shopSagas() {
    yield all([
        call(fetchCollectionsStart)
    ])
}