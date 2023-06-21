import React from "react";
import "./Navbar.css"

class Navbar extends React.Component {
    render() {
        return(
            // 11.Modules Css
            <div className="Dark-nav">
                {/* 9.Component Composition */}
                {this.props.children}
            </div>
        )
    }
}

export default Navbar;