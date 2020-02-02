import React from 'react';
import './App.scss';
import HomePage from "./pages/homepage/Homepage.component";
import {Switch, Route, Redirect} from 'react-router-dom'
import {ShopPage} from "./pages/shop/shop.component";
import {Header} from "./components/header/header.component";
import {AuthPage} from "./pages/AuthPage/authpage.component";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentUser} from "./redux/selectors/user-selectors";
import {Checkout} from "./pages/checkout/checkout.component";
import {checkUserSession} from "./redux/actions/user-actions";

function App() {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);

    React.useEffect(() => {
        dispatch(checkUserSession())
        // const unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
        //     //debugger
        //     if (user) {
        //         const userRef = await createUserProfileDocument(user);
        //         userRef.onSnapshot(snapshot => {
        //             dispatch(setCurrentUser({id: snapshot.id, ...snapshot.data()}))
        //         })
        //     } else
        //     dispatch(setCurrentUser(null));
        // });
        // return () => unsubscribeFromAuth();
    }, [dispatch]);
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
