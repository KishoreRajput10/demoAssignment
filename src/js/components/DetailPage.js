import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import { POINT_CONVERSION_UNCOMPRESSED } from 'constants';

class DetailPage extends React.Component {

    constructor(props){
        super(props)
   
        this.goBack = this.goBack.bind(this);
    }
    goBack(e){
        browserHistory.push('/dashboard');
    }

    render() {
        const { id, full_name, name } = this.props.params;
        let value = id || full_name || name
        return (localStorage.getItem("pass") ? <div style={{textAlign :"center",marginTop:"219px"}}>

            <h1>The value you have clicked is :
            <strong style={{color:"blue"}}>{value}</strong> </h1>
            <div>
                <input type="button" value="Back" onClick={this.goBack}/>
            </div>

        </div> : <div style={{alignItems:"center",justifyContent:"center",display:"flex",flex:"1",height:"100vh",backgroundColor:"#003057",color:"white",fontWeight:"700",
                fontSize:"1.1em"}}>
                <div>
                    <h1>Please login to access this page</h1>
                    <button onClick={() => browserHistory.push('/login')} style={{height:"40px",width:"100px",borderRadius:"30px",color:"#003057",boxShadow:"none",borderColor:"transparent"}}> Login </button>
                </div></div>)
    }
}

function mapStateToProps(state) {
    return {
        dashboard: state.dashboard,
        login: state.login
    };
}

export default connect(
    mapStateToProps,
)(DetailPage);