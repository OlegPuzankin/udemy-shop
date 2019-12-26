import {createStore, applyMiddleware, compose} from 'redux'
import logger from 'redux-logger'
import rootReducer from "./rootReducer";
import {persistStore} from 'redux-persist'

const middleware = [logger]

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
    // other store enhancers if any
);


//export const store = createStore(rootReducer, applyMiddleware(logger));
export const store = createStore(rootReducer, enhancer);
export const persistor = persistStore(store);

//export const store = createStore(rootReducer);

export default {store, persistor}
