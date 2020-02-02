import {takeLatest, put, call, all} from 'redux-saga/effects'
import {
    CHECK_USER_SESSION,
    EMAIL_SIGN_IN_START,
    GOOGLE_SIGN_IN_START,
    SIGN_OUT_START,
    SIGN_UP_START,
    SIGN_UP_SUCCESS
} from "../types";
import {auth, createUserProfileDocument, getCurrentUser, googleProvider} from "../../firebase/firebase.utils";
import {
    signInFail,
    signInSuccess,
    signOutFail,
    signOutSuccess,
    signUpFail,
    signUpSuccess
} from "../actions/user-actions";


function* getSnapshotFromUserAuth(userAuth, displayName) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth, displayName);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({...userSnapshot.data(), id: userSnapshot.id}))
    } catch (e) {
        yield put(signInFail(e))
    }
}

///////////////////////SAGA  WORKERS//////////////////
function* googleSignIn() {
    try {

        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user)
        // const userRef = yield createUserProfileDocument(user);
        // const userSnapshot = yield userRef.get();
        // yield put(signInSuccess({...userSnapshot.data(), id: userSnapshot.id}))

    } catch (e) {
        yield put(signInFail(e))

    }
}

function* emailSignIn({payload}) {

    try {
        const {user} = yield auth.signInWithEmailAndPassword(payload.email, payload.password);
        yield getSnapshotFromUserAuth(user)
        // const userRef = yield createUserProfileDocument(user);
        // const userSnapshot = yield userRef.get();
        // yield put(signInSuccess({...userSnapshot.data(), id: userSnapshot.id}))

    } catch (e) {
        yield put(signInFail(e))
    }
}

function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth)
            return;
        yield getSnapshotFromUserAuth(userAuth)

    } catch (e) {
        yield put(signInFail(e))
    }
}

function* signOut() {
    try {
        yield auth.signOut()
        yield put(signOutSuccess())

    } catch (e) {
        yield put(signOutFail(e))
    }
}

function* signUp({payload}) {
    const {email, password, displayName} = payload
    try {
        const {user} = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(signUpSuccess({user, displayName}))

    } catch (e) {
        yield put(signUpFail(e))
    }
}

function* signInAfterSignUp({payload}) {
    const {user, displayName}=payload;
    yield getSnapshotFromUserAuth(user, displayName)
}


///////////////////////SAGA  WATCHERS//////////////////
function* onGoogleSignInStart() {
    yield takeLatest(GOOGLE_SIGN_IN_START, googleSignIn)
}

function* onEmailSignInStart() {
    yield takeLatest(EMAIL_SIGN_IN_START, emailSignIn)
}

function* onCheckUserSession() {
    yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated)
}

function* onSignOutStart() {
    yield takeLatest(SIGN_OUT_START, signOut)
}

function* onSignUpStart() {
    yield takeLatest(SIGN_UP_START, signUp)
}

function* onSignUpSuccess() {
    yield takeLatest(SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ])
}