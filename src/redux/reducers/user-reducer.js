import {SIGN_IN_FAIL, SIGN_IN_SUCCESS, SIGN_OUT_FAIL, SIGN_OUT_SUCCESS} from "../types";

const INITIAL_STATE={
    currentUser: null,
    error: null
};

export  function userReducer(state=INITIAL_STATE, action){
    const {payload} =action;
    switch (action.type) {

        case SIGN_IN_SUCCESS:
            return {
                ...state, currentUser: payload, error: null
            };
        case SIGN_OUT_SUCCESS:
            return {
                ...state, currentUser: null, error: null
            };
        case SIGN_OUT_FAIL:
        case SIGN_IN_FAIL:
            return {
                ...state, error: payload};
        default:
            return state

    }
}