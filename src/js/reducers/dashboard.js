import {SET_DATA} from '../constants/constant'
const initialState = {
    data:[]
};

export default function dashboard (state = initialState, action) {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                data: action.data
            };
        default:
            return state;
    }
}
