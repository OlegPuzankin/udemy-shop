import {combineReducers} from 'redux'
import {userReducer} from "./reducers/user-reducer";
import {cartReducer} from "./reducers/cart-reducer";
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {directoryReducer} from "./reducers/directory-reducer";
import {shopReducer} from "./reducers/shop-reducer";

const persistConfig={
    key: 'root',
    storage,
    whitelist:['cart']
};

const rootReducer= combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory:directoryReducer,
    shop: shopReducer
});
export default persistReducer(persistConfig, rootReducer)

