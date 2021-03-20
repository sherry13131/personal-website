import React, { Component } from 'react';
import '../styles/navbar.css';
import { NavLink, withRouter } from "react-router-dom";
import {
    isMobile
  } from "react-device-detect";

class Navbar extends Component {

    state = {
        isHovered: false,
        bottomMenu: false
    }

    handleHover = () => {
        this.setState(prevState => ({
            isHovered: !prevState.isHovered
        }));
    }

    handleClick = (elem) => {
        this.props.getAnchor(elem);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.bottomMenu !== prevState.bottomMenu) {
            return ({ bottomMenu: nextProps.bottomMenu });
        } else return null;
    }
    
    render() {
        if (isMobile) {
            let { bottomMenu } = this.state;

        return (
            <div className="navbar-btn navbar-btn-phone">
                <ul className={ bottomMenu ? "bottom-ul-phone nav-phone" : "nav-phone" }>
                    <li>
                        <NavLink exact to="/" activeClassName="activeNav" onClick={() => this.handleClick("home")}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/" activeClassName="activeNav" onClick={() => this.handleClick("about")}>About</NavLink>
                    </li>
                    {/* <li>
                        <NavLink exact to="/" activeClassName="activeNav" onClick={() => this.handleClick("project")}>Projects</NavLink>
                    </li> */}
                    <li>
                        <NavLink exact to="/" activeClassName="activeNav" onClick={() => this.handleClick("contact")}>Contact</NavLink>
                    </li>
                </ul>
            </div>
        );
        }
        let { isHovered, bottomMenu } = this.state;
        if (!isHovered) {
            return(
                <div className="navbar-btn" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
                    <div className={ bottomMenu ? "header-logo bottom" : "header-logo" }>
                        <NavLink exact to="/">Menu</NavLink>
                    </div>
                </div>
            );
        }

        return (
            <div className="navbar-btn" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
                <div className={ bottomMenu ? "header-logo bottom" : "header-logo" }>
                    <NavLink exact to="/">Menu</NavLink>
                </div>
                <ul className={ bottomMenu ? "bottom-ul" : "" }>
                    <li>
                        <NavLink exact to="/" activeClassName="activeNav" onClick={() => this.handleClick("home")}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/" activeClassName="activeNav" onClick={() => this.handleClick("about")}>About</NavLink>
                    </li>
                    {/* <li>
                        <NavLink exact to="/" activeClassName="activeNav" onClick={() => this.handleClick("project")}>Projects</NavLink>
                    </li> */}
                    <li>
                        <NavLink exact to="/" activeClassName="activeNav" onClick={() => this.handleClick("contact")}>Contact</NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Navbar = withRouter(Navbar);