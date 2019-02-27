import {LOGIN_SUCCESS, LOGIN_FAILD, LOGIN_IS_IN_PROCESS} from '../constants/constant'
const initialState = {
    loader: false,
    isLogin: false,
    error: false
};

export default function loginReducer (state = initialState, action) {
    switch (action.type) {
        case LOGIN_IS_IN_PROCESS:
            return {
                ...state,
                loader: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loader: false,
                isLogin: true,
            };
        case LOGIN_FAILD:
            return {
                ...state,
                loader: false,
                error: true,
            };
        default:
            return state;
    }
}
