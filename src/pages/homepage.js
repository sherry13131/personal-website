import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router-dom";

import '../styles/homepage.css';
import HomepageContent from '../js/HomepageContent';
import Projects from '../js/Projects'
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
    
    constructor(props) {
        super(props);
        this.myAbout = React.createRef();
        this.myHome = React.createRef();
        this.myProject = React.createRef();
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
      
        const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight
      
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
                <div className="hp-about">
                    <div className="description">
                        <div className="icon"></div>
                        <div className="des">
                            <div className="des-para">A forth year student at The University of Toronto Scarborough.</div>
                            <div className="des-para">I am a developer, and always want to build interesting apps.</div>
                            {/* <div className="des-para">Welcome to download my resume. </div> */}
                        </div>
                    </div>
                    <div className="my-skills">
                        <div className="skill-out">
                            <p className="center-under">Languages</p> 
                            <div className="skills left">
                                <div className="skill a">Java</div>
                                <div className="skill a">Python</div>
                                <div className="skill a">JavaScript</div>
                                <div className="skill a">C</div>
                                <div className="skill a">C++</div>
                                <div className="skill a">HTML &amp; CSS</div>
                                <div className="skill a">Go</div>
                                <div className="skill a">Verilog</div>
                            </div>
                        </div>
                        <div className="skill-out">                        
                            <p className="center-under">Technologies</p>
                            <div className="skills right">
                                <div className="skill b">Android Studio</div>
                                <div className="skill b">Node.js</div>
                                <div className="skill b">React.js</div>
                                <div className="skill b">MySQL</div>
                                <div className="skill b">Meteor.js</div>
                                <div className="skill b">Cosmos-SDK</div>
                                <div className="skill b">Google Cloud Platform</div>
                                <div className="skill b">Photoshop</div>
                                <div className="skill b">Illustrator</div>
                                <div className="skill b">Blender</div>
                            </div>
                        </div>
                    </div>
                    <div className="my-timeline">
                        <div className="tl-left">
                        
                        </div>
                        <div className="tl-right">

                        </div>
                    </div>
                </div>
            );
        } else if (name === "project") {
            return(
                <div className="hp-project">
                    <Projects></Projects>
                </div>
            );
        } else if (name === "contact") {
            return(
                <div className="hp-contact">
                    
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
        {
            name: "project"
        },
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
