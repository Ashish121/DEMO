import React, { Component } from 'react'
import { connect } from 'react-redux';
import  dashBoardLoadSuccess  from '../../redux/Dashboard/dashboardActions';

export class DashbardComponent extends Component {
    render() {
        return (
            <div>
                <h3>This is Dahsboard</h3>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
        userName : state.dashboard.userName,
        role: state.dashboard.role
})

const mapDispatchToProps = dispatch => {
    return {
        dashBoardLoadSuccess : () =>  dispatch(dashBoardLoadSuccess())
    }
   
}

export default connect(mapStateToProps, mapDispatchToProps)(DashbardComponent)
