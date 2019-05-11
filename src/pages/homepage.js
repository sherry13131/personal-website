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
                                <div className="skill">Java</div>
                                <div className="skill">Python</div>
                                <div className="skill">JavaScript</div>
                                <div className="skill">C</div>
                                <div className="skill">C++</div>
                                <div className="skill">HTML &amp; CSS</div>
                                <div className="skill">Go</div>
                                <div className="skill">Verilog</div>
                            </div>
                        </div>
                        <div className="skill-out">                        
                            <p className="center-under">Technologies</p>
                            <div className="skills right">
                                <div className="skill">Android Studio</div>
                                <div className="skill">Node.js</div>
                                <div className="skill">React.js</div>
                                <div className="skill">MySQL</div>
                                <div className="skill">Meteor.js</div>
                                <div className="skill">Cosmos-SDK</div>
                                <div className="skill">Google Cloud Platform</div>
                                <div className="skill">Photoshop</div>
                                <div className="skill">Illustrator</div>
                                <div className="skill">Blender</div>
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
        },
    ];


    render() {
        return (
            <div>
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
