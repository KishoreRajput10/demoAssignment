import {SET_DATA} from '../constants/constant'

export function getData() {
    
    return dispatch => {
        fetch("https://api.github.com/users/mralexgray/repos", {
            method: 'GET'
        })
            .then(data => data.json())
            .then(json => {
                dispatch(setData(json))
            })
            
    };

}

export function setData(data) {
    return {
        type: SET_DATA,
        data: data
    };
}

