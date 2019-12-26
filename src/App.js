import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/Homepage.component";
import {Switch, Route, Redirect} from 'react-router-dom'
import ShopPage from "./pages/shop/shop.component";
import {Header} from "./components/header/header.component";
import {AuthPage} from "./pages/AuthPage/authpage.component";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import {useDispatch, useSelector} from "react-redux";
import {SET_CURRENT_USER} from "./redux/types";
import {selectCurrentUser} from "./redux/selectors/user-selectors";
import {Checkout} from "./pages/checkout/checkout.component";

function App() {

    //const [currentUser, setCurrentUser] = React.useState(null);
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser)

    React.useEffect(() => {
        const unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
            //debugger
            if (user) {

                const userRef = await createUserProfileDocument(user);
                userRef.onSnapshot(snapshot => {
                    dispatch({
                        type: SET_CURRENT_USER,
                        payload: {id: snapshot.id, ...snapshot.data()}
                    })
                    //setCurrentUser({id: snapshot.id, ...snapshot.data()});
                    //console.log({id: snapshot.id, ...snapshot.data()})
                })
            } else
                debugger
            dispatch({
                type: SET_CURRENT_USER,
                payload: null
            });
        });

        return () => unsubscribeFromAuth();
    }, []);
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path={'/'} component={HomePage}/>
                <Route path={'/shop'} component={ShopPage}/>
                <Route path={'/checkout'} component={Checkout}/>
                <Route exact path={'/auth'} render={() => currentUser ? (<Redirect to={'/'}/>) : <AuthPage/>}/>

            </Switch>
        </div>
    );
}

export default App;
