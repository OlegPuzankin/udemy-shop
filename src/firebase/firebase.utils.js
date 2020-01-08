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


export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');
firebase.auth().useDeviceLanguage();
googleProvider.setCustomParameters({'login_hint': 'user@example.com'});

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);


//////////////////////////////////FUNCTIONS////////////////////////////////
export async function createUserProfileDocument(user, additionalData) {
    //debugger

    if (!user) return;

    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {

        const {displayName, email} = user;
        const createdAt = new Date();
        try {
            await userRef.set({displayName, email, createdAt, ...additionalData})
        } catch (e) {
            console.log(e.message)
        }
    }
    return userRef
}

export async function addCollectionsAndDocuments(collectionKey, objectsToAdd) {
    const collectionRef = firestore.collection(collectionKey);
    //console.log(collectionRef)
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj)
    })

    return await batch.commit()
}

export function convertCollectionSnapshotToMap(collections) {
    const mappedCollections= collections.docs.map(doc => {
        const {title, items} = doc.data();
        return {
            routeName:encodeURI(title.toLowerCase()),
            id: doc.id,
            items,
            title
        }

    })

    return mappedCollections.reduce((accumulator,collection)=>{
        accumulator[collection.title.toLocaleLowerCase()]=collection;
        return accumulator;
    },{})
}

export default firebase;