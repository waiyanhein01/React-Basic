import React from "react";
import "./Head.css"

class Head extends React.Component {
    render() {
        return (
            <div className="Header-center">
                {this.props.children}
            </div>
        )
    }
}

export default Head;