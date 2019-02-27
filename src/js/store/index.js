import {applyMiddleware, createStore, compose, combineReducers } from 'redux'
import reducer from "../reducers";
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

const middleware = applyMiddleware(promise(), thunk);
const enhancer = compose(
  middleware
);
const store = createStore(reducer,enhancer);

export default store;




