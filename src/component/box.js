import React from "react";

class Box extends React.Component {
    render() {
        // const {data} = this.state
        // this.componentDidMount({

        // })
        return (
            <div className="wrapper">
                <div style={{
                    backgroundColor:`${this.props.color}`
                }}
                className="box">
                    <button > Change Color</button>
                </div>
            </div>
        )
    }
}

export default Box;