import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router-dom";
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";

class About extends Component {

    static routerProps = {
        path: '/about',
        exact: true
    }

    render() {
        return (
            <Fragment>
                    <div className="description">
                        <div className={isMobile ? "" : "icon"}></div>
                        {isMobile ? (
                            <div className="des des-phone">
                                <p>I am:</p>
                                <p className="des-para">- Studying at The University of Toronto Scarborough.</p>
                                <p className="des-para">- A developer, and always want to build interesting apps.</p>
                                {/* <div className="des-para">Welcome to download my resume. </div> */}
                            </div>
                        ) : (
                            <div className="des">
                            <div className="des-para">A fourth year student at The University of Toronto Scarborough.</div>
                            <div className="des-para">I am a developer, and always want to build interesting apps.</div>
                            {/* <div className="des-para">Welcome to download my resume. </div> */}
                        </div>
                        )}
                    </div>
                    <div className={isMobile ? "my-skills my-skills-phone" : "my-skills"}>
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
                </Fragment>
        );
    }
};

export default About = withRouter(About);