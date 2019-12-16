import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/Homepage.component";
import {Switch, Route} from 'react-router-dom'
import ShopPage from "./pages/shop/shop.component";
import {Header} from "./components/header/header.component";
import {AuthPage} from "./pages/AuthPage/authpage.component";
import {auth} from "./firebase/firebase.utils";

function App() {

    const[currentUser, setCurrentUser]=React.useState(null);

    React.useEffect(()=>{
        auth.onAuthStateChanged(user=>{
            setCurrentUser(user)
            console.log(user)
        })
    }, []);
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
