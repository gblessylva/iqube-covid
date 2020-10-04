import React from "react";

class Box extends React.Component {
    componentDidMount(){
         this.props.loadData() 
    }
    render() {
        return (
            <div className="wrapper">
                
            </div>
        )
    }
}

export default Box;