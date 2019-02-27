import {LOGIN_SUCCESS, LOGIN_FAILD, LOGIN_IS_IN_PROCESS} from '../constants/constant'

/*
	USERNAME : "test@mail.com"

	PASSWORD : "welcome"
*/


export function loginAuth(username, password) {
    return dispatch => {
        if (username == "test@mail.com" && password == "welcome") {
        	dispatch(authSuccess());
        } else {
        	dispatch(authFailure());
        }
    };
}

export function auth() {
    return {
        type: LOGIN_IS_IN_PROCESS
    };
}

export function authSuccess() {
    return {
        type: LOGIN_SUCCESS,
    };
}

export function authFailure() {
    return {
        type: LOGIN_FAILD
    };
}
