import {takeLatest, put, call, all} from 'redux-saga/effects'
import {EMAIL_SIGN_IN_START, GOOGLE_SIGN_IN_START} from "../types";
import {auth, createUserProfileDocument, googleProvider} from "../../firebase/firebase.utils";
import {signInFail, signInSuccess} from "../actions/user-actions";


function* googleSignIn() {
    try {

        const {user} = yield auth.signInWithPopup(googleProvider);
        const userRef = yield createUserProfileDocument(user);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({...userSnapshot.data(), id: userSnapshot.id}))

    } catch (e) {
        yield put(signInFail(e))

    }
}

function* emailSignIn({payload}) {
    debugger
    console.log(payload)

    try {
         const{user}=yield auth.signInWithEmailAndPassword(payload.email, payload.password);
        console.log(user)


    } catch (e) {
        yield put(signInFail(e))
    }
}

function* onGoogleSignInStart() {
    yield takeLatest(GOOGLE_SIGN_IN_START, googleSignIn)
}

function* onEmailSignInStart() {
    yield takeLatest(EMAIL_SIGN_IN_START, emailSignIn)
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart)
    ])
}