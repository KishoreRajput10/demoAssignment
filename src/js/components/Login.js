import  React, { Component } from  'react';
import {connect} from 'react-redux';
import {loginAuth} from '../actions/LoginAction'
import { browserHistory } from 'react-router'

class  Login  extends  Component {
	
	handleClick() {
		let username = document.getElementById("username").value;
		let password = document.getElementById("pass").value;
		localStorage.setItem('pass',password)
		this.props.loginAuth(username,password);
	}
	
	componentWillReceiveProps(n) {
		localStorage.setItem('Session', true);
		if(n.login.isLogin ) {

			browserHistory.push('/dashboard');
		}
	}

	render() {

		return(
			<div style={{textAlign:"center"}}>
				<h1>Login Authentication Form</h1>

				<div style={{backgroundColor:"antiquewhite",padding: "146px"}}>

				{this.props.login.error? <div style={{marginRight:"99px",color:"red", marginBottom:"15px"}}>Please insert correct username and password!</div>:null}

				<div className="col-md-2" style={{marginLeft:"450px"}}>

				<label>Username: </label><br/>

				<input type="text" id="username" /><br/>

				</div><br/>

				<div className="col-md-2" style={{marginLeft:"450px"}}>

					<label>Password:</label><br/>

				 <input type="password" id="pass" />

				 </div><br/>

				 <div className="col-md-2" style={{marginLeft:"450px",marginTop:"25px"}} >

				<button onClick={this.handleClick.bind(this)}>Login</button>

				</div>

			   </div>

			</div>
		)
	}
}

function mapStateToProps (state) {
    return {
        login: state.login
    };
}

function mapDispatchToProps (dispatch) {
    return {
        loginAuth: (email, Password) => dispatch(loginAuth(email, Password)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);