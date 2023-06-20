import React from "react";

class Head extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default Head;