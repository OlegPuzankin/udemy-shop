import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/Homepage.component";
import {Switch, Route} from 'react-router-dom'
import ShopPage from "./pages/shop/shop.component";
import {Header} from "./components/header/header.component";
import {AuthPage} from "./pages/AuthPage/authpage.component";

function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path={'/'} component={HomePage}/>
                <Route  path={'/shop'} component={ShopPage}/>
                <Route  path={'/auth'} component={AuthPage}/>

            </Switch>
        </div>
    );
}

export default App;
