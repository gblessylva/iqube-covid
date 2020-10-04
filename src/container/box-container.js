import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/index.js"

class BoxCon extends React.Component{
    componentDidMount(){
        this.props.loadData()
    }
    render(){
        return(
            <div>
                <header>
                     <h1>iQube Redux Covid 19 Info</h1> 
                     
                </header>

            </div>
        )
    }
}


const mapStateToProps=(state)=>{
    return state
};

export default connect (mapStateToProps, actionCreators)(BoxCon);