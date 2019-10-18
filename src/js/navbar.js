import React, { Component, Fragment } from 'react';
import '../styles/navbar.css';
import { NavLink, withRouter } from "react-router-dom";
import {
    BrowserView,
    MobileView,
    isBrowser,
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

    // shouldComponentUpdate(nextProp, nextState) {
    //     if (this.props.bottomMenu === nextProp.bottomMenu && this.state.isHovered === nextState.isHovered) {
    //         return false;
    //     } else {
    //         this.setState({ bottomMenu: nextProp.bottomMenu });
    //         return true;
    //     }
    // }

    componentWillReceiveProps() {
        this.setState({ bottomMenu: this.props.bottomMenu });
    }

    renderPhone() {
        return(
            <Fragment>
                <ul className="nav-phone">
                    <li>
                        <NavLink exact to="/" activeClassName="activeNav" onClick={() => this.handleClick("home")}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/" activeClassName="activeNav" onClick={() => this.handleClick("about")}>About</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/" activeClassName="activeNav" onClick={() => this.handleClick("project")}>Projects</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/" activeClassName="activeNav" onClick={() => this.handleClick("contact")}>Contact</NavLink>
                    </li>
                </ul>
            </Fragment>
        )
    }

    render() {
        if (isMobile) {
            return this.renderPhone();
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
                    <li>
                        <NavLink exact to="/" activeClassName="activeNav" onClick={() => this.handleClick("project")}>Projects</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/" activeClassName="activeNav" onClick={() => this.handleClick("contact")}>Contact</NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Navbar = withRouter(Navbar);