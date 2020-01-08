import {all, call} from 'redux-saga/effects'
import {fetchCollectionsStart} from "./shop-sagas";
import {userSagas} from "./user-sagas";

export function* rootSagas() {
    yield all([
        call(fetchCollectionsStart),
        call(userSagas)
    ])

}