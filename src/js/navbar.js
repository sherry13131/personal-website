import React, { Component } from 'react';
import '../styles/navbar.css';
import { NavLink, withRouter } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="header-logo">
                    <NavLink exact to="/">Sherry Ma</NavLink>
                </div>
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="activeNav">Home</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/about" activeClassName="activeNav">About</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/project" activeClassName="activeNav">project</NavLink>
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