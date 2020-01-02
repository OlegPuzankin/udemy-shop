import {UPDATE_SHOP_COLLECTIONS} from "../types";

export function updateShopCollections(collections) {
    return{
        type:UPDATE_SHOP_COLLECTIONS,
        payload:collections
    }
}