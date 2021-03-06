import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {BrowserRouter} from "react-router-dom";
import {store, persistor} from "./redux/store";
import {PersistGate} from 'redux-persist/integration/react'

const app =
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate persistor={persistor} loading={null}>
                <App/>
            </PersistGate>
        </BrowserRouter>
    </Provider>

ReactDOM.render(app, document.getElementById('root'));
