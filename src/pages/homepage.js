import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import '../styles/homepage.css';
import HomepageContent from '../js/HomepageContent';

export class _HomePage extends Component {

    static routerProps = {
        path: '/',
        exact: true
    }

    render() {
        return (
          <div>
            <div className={["jumbotron", "overlay"].join(" ")} id="home-bg">
                <HomepageContent></HomepageContent>
                {/* <div id="greeting">Welcome</div>
                <div id="greeting">My personal website</div> */}
            </div>

            <div className="contents">
                <div className="parallax p1" id="goabout">
                    <div>About Myself</div>
                </div>
                <div className="container left">
                    <div id="about">
                        <p>I am a computer science student who like to learn new knowledge and explore the world.</p>
                    </div>
                </div>
            </div>

            <div className="contents">
                <div className="parallax p2" id="goproject">
                    <div>Projects</div>
                </div>
                <div className="container right">
                    <div id="project">
                        <p>Here are some of my projects.</p>
                    </div>
                </div>
            </div>


            <div className="contents">
                <div className="parallax p3" id="golink">
                    <div>Links</div>
                </div>
                <div className="container left">
                    <div id="link">
                        <p>These are my links.</p>
                    </div>
                </div>
            </div>

            <div className="contents">
                <div className="parallax p4" id="gocontact">
                    <div>Contact methods</div>
                </div>
                <div className="container left">
                    <div id="contact">
                        <p>Email: sherry.hyma@gmail.com</p>
                        <p>Github</p>
                        <p>LinkedIn</p>
                    </div>
                </div>
            </div>
          </div>
        );
    }
};

export const HomePage = withRouter(_HomePage);
