import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import { getData } from '../actions/DashboardAction';
import ReactTable from 'react-table';
import 'react-table/react-table.css'




class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.openDetailPage = this.openDetailPage.bind(this);
    }

    componentDidMount() {
        this.props.getData();
    }

    logout() {
        localStorage.clear();
        browserHistory.push('/login');

    }


    openDetailPage(val) {
        browserHistory.push('/details/' + val) 
    }


    render() {
        const { data } = this.props.dashboard;

        const columns = [
            {
                Header: 'ID',
                accessor: 'id'
            },
            {
                Header: 'Name',
                accessor: 'name'
            },
            {
                Header: 'Full Name',
                accessor: 'full_name'
            },
        ]

        return (

            localStorage.getItem("pass") ?
                <div>
                    <button onClick={() => this.logout()} style={{ float: "right" }}>Logout</button>
                    <h1 style={{ "textAlign": "center" }}>Dashboard</h1>
                    <ReactTable
                        data={data}
                        columns={columns}
                        showPageJump={false}
                        showPagination={true}
                        showPaginationBottom={true}
                        showPageSizeOptions={false}
                        defaultPageSize={10}
                        getTdProps={(state, rowInfo, column, instance) => {
                            return {
                                onClick: (e, handleOriginal) => {
                                    if (column.Header == "ID") {
                                        this.openDetailPage(rowInfo.row.id)
                                    } else if (column.Header == "Name") {
                                        this.openDetailPage(rowInfo.row.name)
                                    } else {
                                        this.openDetailPage(rowInfo.row.full_name)
                                    }

                                    if (handleOriginal) {
                                        handleOriginal();
                                    }
                                }
                            };
                        }}
                    />

                </div> : <div style={{alignItems:"center",justifyContent:"center",display:"flex",flex:"1",height:"100vh",backgroundColor:"#003057",color:"white",fontWeight:"700",
                fontSize:"1.1em"}}>
                <div>
                    <h1>Please login to access this page</h1>
                    <button onClick={() => browserHistory.push('/login')} style={{height:"40px",width:"100px",borderRadius:"30px",color:"#003057",boxShadow:"none",borderColor:"transparent"}}> Login </button>
                </div></div>
        )
    }
}

function mapStateToProps(state) {
    return {
        dashboard: state.dashboard,
        login: state.login
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getData: () => dispatch(getData()),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);


