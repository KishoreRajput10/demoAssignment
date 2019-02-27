import {combineReducers} from 'redux';
import login from './login';
import dashboard from './dashboard';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
export default combineReducers({
    login,
    dashboard,
    routing: routerReducer
});

