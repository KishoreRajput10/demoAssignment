import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import store from "./js/store/index";
import Login from "./js/components/Login";
import Dashboard from "./js/components/Dashboard";
import DetailPage from './js/components/DetailPage';


const history = syncHistoryWithStore(browserHistory, store)

render(
  	<Provider store={store}>
	    <Router history={history}>
			<Route path="/" component={Login}/>
	    	<Route path="login" component={Login}/>
		    <Route path="dashboard" component={Dashboard}/>
			<Route exact path="/details/:id" component={DetailPage}/>
			<Route exact path="/details/:full_name/:last_name" component={DetailPage}/>
			<Route exact path="/details/:name" component={DetailPage}/>
	    </Router>
  	</Provider>,
  	document.getElementById('root')
);