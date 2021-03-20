import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router-dom";

import '../styles/homepage.css';
import HomepageContent from '../js/HomepageContent';
import About from '../js/About';
import Projects from '../js/Projects';
import Contact from '../js/Contact';
import Navbar from '../js/navbar';
import ScrollView, { ScrollElement } from "../js/scroller";
import {
    isMobile
  } from "react-device-detect";

export class _HomePage extends Component {

    static routerProps = {
        path: '/',
        exact: true
    }

    scrollTo = (name) => {
        this._scroller.scrollTo(name);
    }
    
    constructor(props) {
        super(props);
        this.myAbout = React.createRef();
        this.myHome = React.createRef();
        // this.myProject = React.createRef();
        this.myContact = React.createRef();
        
        this.state = {
            currAnchor: "home",
            initClear: false,
            theposition: window.pageYOffset,
            bottomMenu: false
        }
    }

    getNavAnchor = (anchor) => {
        this.setState({ currAnchor: anchor }, () => {
            this.scrollTo(anchor);
        });
    }

    listenToScroll = () => {
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop
      
        const scrolled = winScroll;
      
        this.setState({
          theposition: scrolled,
        })

        if (scrolled >= window.innerHeight - 30) {
            this.setState({
                bottomMenu: true
            });
        } else {
            this.setState({
                bottomMenu: false
            });
        }
      }

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }

    renderDiff = (name) => {
        if (name === "home") {
            return (
                <div className={["jumbotron", "overlay"].join(" ")} id="home-bg" ref={this.myHome}>
                    <Navbar getAnchor={this.getNavAnchor} bottomMenu={this.state.bottomMenu}></Navbar>
                    <HomepageContent clear={this.state.initClear}></HomepageContent>
                </div>
            );
        } else if (name === "about") {
            return (
                <div className={isMobile ? "hp-about hp-about-phone" : "hp-about"}>
                    <About></About>
                </div>
            );
        // } else if (name === "project") {
        //     return(
        //         <div className="hp-project">
        //             <Projects></Projects>
        //         </div>
        //     );
        } else if (name === "contact") {
            return(
                <div className="hp-contact">
                    <Contact></Contact>
                </div>
            );
        }
    }

    items = [
        {
            name: "home"
        },
        {
            name: "about"
        },
        // {
        //     name: "project"
        // },
        {
            name: "contact"
        }
    ];


    render() {
        return (
            <Fragment>
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
                <div className="footer">
                    This website is made by Sherry Ma
                </div>
            </Fragment>
        );
    }
};

export const HomePage = withRouter(_HomePage);
