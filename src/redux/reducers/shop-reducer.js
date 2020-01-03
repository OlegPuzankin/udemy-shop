import {
    FETCH_COLLECTIONS_FAIL,
    FETCH_COLLECTIONS_START,
    FETCH_COLLECTIONS_SUCCESS,
} from "../types";

const INITIAL_STATE={
    collections:null,
    isFetching: false,
    errorMessage:undefined
};



export function shopReducer(state=INITIAL_STATE, action) {
    const {payload}=action;
    switch (action.type) {

        case FETCH_COLLECTIONS_START:
            return {...state, isFetching: true};
        case FETCH_COLLECTIONS_SUCCESS:
            return {...state, collections: payload, isFetching: false};
        case FETCH_COLLECTIONS_FAIL:
            return {...state, isFetching: false, errorMessage: payload};

        default:
            return state;

    }
}