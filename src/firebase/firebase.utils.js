import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBFCmWSvE6k7FGDZA-1C7N3mvvMULuKqkI",
    authDomain: "e-commerce-shop-77.firebaseapp.com",
    databaseURL: "https://e-commerce-shop-77.firebaseio.com",
    projectId: "e-commerce-shop-77",
    storageBucket: "e-commerce-shop-77.appspot.com",
    messagingSenderId: "431775978397",
    appId: "1:431775978397:web:84225877ec896b17e85574"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
firebase.auth().useDeviceLanguage();
provider.setCustomParameters({'login_hint': 'user@example.com'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);


//////////////////////////////////FUNCTIONS////////////////////////////////
export async function createUserProfileDocument(user, additionalData) {
    //debugger

    if (!user) return;

    const useRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await useRef.get();

    if (!snapshot.exists) {

        const {displayName, email} = user;
        const createdAt = new Date();
        try {
            await useRef.set({displayName, email, createdAt, ...additionalData})
        } catch (e) {
            console.log(e.message)
        }
    }
    return useRef
}

export default firebase;