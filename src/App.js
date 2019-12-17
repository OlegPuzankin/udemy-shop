import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/Homepage.component";
import {Switch, Route} from 'react-router-dom'
import ShopPage from "./pages/shop/shop.component";
import {Header} from "./components/header/header.component";
import {AuthPage} from "./pages/AuthPage/authpage.component";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";

function App() {

    const [currentUser, setCurrentUser] = React.useState(null);

    React.useEffect(() => {
        const unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
            if (user) {

                const userRef = await createUserProfileDocument(user);
                userRef.onSnapshot(snapshot => {
                    setCurrentUser({id: snapshot.id, ...snapshot.data()});
                    console.log({id: snapshot.id, ...snapshot.data()})
                })
            } else
                setCurrentUser(user);
        });

        return () => unsubscribeFromAuth();
    }, []);
    return (
        <div>
            <Header currentUser={currentUser}/>
            <Switch>
                <Route exact path={'/'} component={HomePage}/>
                <Route path={'/shop'} component={ShopPage}/>
                <Route path={'/auth'} component={AuthPage}/>

            </Switch>
        </div>
    );
}

export default App;
