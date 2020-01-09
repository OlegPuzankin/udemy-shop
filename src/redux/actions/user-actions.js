import {
    CHECK_USER_SESSION,
    EMAIL_SIGN_IN_START,
    GOOGLE_SIGN_IN_START,
    SET_CURRENT_USER,
    SIGN_IN_FAIL,
    SIGN_IN_SUCCESS, SIGN_OUT_FAIL, SIGN_OUT_START, SIGN_OUT_SUCCESS
} from "../types";

export function setCurrentUser(user) {
    return{
        type:SET_CURRENT_USER,
        payload:user
    }
}



export function googleSignInStart() {
    return{
        type:GOOGLE_SIGN_IN_START,
    }
}

export function emailSignInStart(emailAndPassword) {
    return{
        type:EMAIL_SIGN_IN_START,
        payload:emailAndPassword
    }
}

export function signInSuccess(user) {
    return{
        type:SIGN_IN_SUCCESS,
        payload:user
    }
}
export function signInFail(error) {
    return{
        type:SIGN_IN_FAIL,
        payload:error
    }
}

export function checkUserSession() {
    return{
        type:CHECK_USER_SESSION,
    }
}

export function signOutStart() {
    return{
        type:SIGN_OUT_START,
    }
}

export function signOutSuccess() {
    return{
        type:SIGN_OUT_SUCCESS,
    }
}

export function signOutFail(error) {
    return{
        type:SIGN_OUT_FAIL,
        payload:error
    }
}