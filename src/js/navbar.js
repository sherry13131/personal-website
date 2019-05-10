import React, { Component } from 'react';
import '../styles/navbar.css';
import { NavLink, withRouter } from "react-router-dom";

class Navbar extends Component {

    state = {
        isHovered: false
    }

    handleHover = () => {
        this.setState(prevState => ({
            isHovered: !prevState.isHovered
        }));
    }

    handleClick = (elem) => {
        this.props.getAnchor(elem);
    }

    render() {
        let { isHovered } = this.state;
        if (!isHovered) {
            return(
                <div className="navbar-btn" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} >
                    <div className="header-logo">
                        <NavLink exact to="/">Menu</NavLink>
                    </div>
                </div>
            );
        }
        return (
            <div className="navbar-btn" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} >
                <div className="header-logo">
                    <NavLink exact to="/">Menu</NavLink>
                </div>
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="activeNav" onClick={() => this.handleClick("home")}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/" activeClassName="activeNav" onClick={() => this.handleClick("about")}>About</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/project" activeClassName="activeNav">Projects</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" activeClassName="activeNav">Contact</NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Navbar = withRouter(Navbar);