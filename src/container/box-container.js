import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/index.js"
import Loading from '../component/loading'

class BoxCon extends React.Component{
    componentDidMount(){
        this.props.loadData()
    }
    render(){
        const {data} = this.props.result
        const ngState = [];
    
        return(
            (typeof data === 'undefined') ? <div className="loading"> <Loading /></div>  
            :
            <div className="dashboard">
                 {data.states.map(state=>{
                       ngState.push(state)
                    })}
                <header>
                     <h1>iQube Redux Covid 19 Info</h1> 
                     <div className='header-info'>
                         <div className="header-card">
                             <p>Total Death  </p>
                             <span>{data.death}</span>
                         </div>
                         <div className="header-card">
                             <p>Total Active Cases </p>
                             <span>{data.totalActiveCases}</span> 
                         </div>
                         <div className="header-card">
                             <p>Total Confirmed Cases </p>
                             <span>{data.totalConfirmedCases}</span>
                         </div>
                         <div className="header-card">
                             <p>Discharged </p>
                             <span>{data.discharged}</span>
                         </div>
                         <div className="header-card">
                             <p>Discharged </p>
                             <span>{data.discharged}</span>
                         </div>
                    </div>
                </header>
                <div>
                </div>
                <table>
                    <thead> 
                    <tr> 
                        <th> Name</th>
                        <th> Deaths</th>
                        <th> Cases on Admision</th>
                        <th> Confirmed Cases</th>
                        <th> Discharged</th>
                    </tr>
                </thead>
                <tbody>
                {ngState.map((state, _id) =>{
                    return (
                        <tr key={state._id}> 
                            <td> {state.state} </td>
                            <td> {state.death} </td>
                            <td> {state.casesOnAdmission} </td>
                            <td> {state.confirmedCases} </td>
                            <td> {state.discharged} </td>
                        </tr>
                    )
                })}
                </tbody>
                </table>
            </div>            
        )
    }
}


const mapStateToProps=(state)=>{
    return state
};

export default connect (mapStateToProps, actionCreators)(BoxCon);