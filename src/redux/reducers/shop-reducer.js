import {UPDATE_SHOP_COLLECTIONS} from "../types";

const INITIAL_STATE={
    collections:null
};



export function shopReducer(state=INITIAL_STATE, action) {
    const {payload}=action;
    switch (action.type) {

        case UPDATE_SHOP_COLLECTIONS:
            return {...state, collections: payload}
            //todo

        default:
            return state;

    }
}