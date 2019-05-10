import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import '../styles/homepage.css';
import HomepageContent from '../js/HomepageContent';
import Navbar from '../js/navbar';
import ScrollView, { ScrollElement } from "../js/scroller";

export class _HomePage extends Component {

    static routerProps = {
        path: '/',
        exact: true
    }

    scrollTo = (name) => {
        this._scroller.scrollTo(name);
    }
    
    state = {
        currAnchor: "home",
        initClear: false
    }

    myAbout = React.createRef();
    myHome = React.createRef();
    myProject = React.createRef();
    myContact = React.createRef();

    getNavAnchor = (anchor) => {
        this.setState({ currAnchor: anchor }, () => {
            console.log(this.state.currAnchor);
            this.scrollTo(anchor);
        });
    }

    renderDiff = (name) => {
        if (name === "home") {
            return (
                <div className={["jumbotron", "overlay"].join(" ")} id="home-bg">
                    <Navbar getAnchor={this.getNavAnchor}></Navbar>
                    <HomepageContent clear={this.state.initClear}></HomepageContent>
                </div>
            );
        } else if (name === "about") {
            return (
                <div className="hp-about">
                    about
                </div>
            );
        } else if (name === "project") {
            return(
                <div className="hp-project">
                    project
                </div>
            );
        } else if (name === "contact") {
            return(
                <div className="hp-contact">
                    contact
                </div>
            );
        }        
    }

    items = [
        // {
        //     name: "home"
        // },
        {
            name: "about"
        },
        {
            name: "project"
        },
        {
            name: "contact"
        },
    ];


    render() {
        return (
            <div>
                <div className={["jumbotron", "overlay"].join(" ")} id="home-bg" ref={this.myHome}>
                    <Navbar getAnchor={this.getNavAnchor}></Navbar>
                    <HomepageContent clear={this.state.initClear}></HomepageContent>
                </div>
                <ScrollView ref={scroller => this._scroller = scroller}>
                    <div className="scroller">
                        {this.items.map(({ name }) => {
                            return (
                                <ScrollElement name={name} key={name}>
                                    {this.renderDiff(name)}
                                </ScrollElement>
                            );
                        })}
                    </div>
                </ScrollView>
            </div>
        );
    }
};

export const HomePage = withRouter(_HomePage);
