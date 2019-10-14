import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import '../styles/projects.css';
import { Tooltip } from 'react-tippy';

class Projects extends Component {

    static routerProps = {
        path: '/project',
        exact: true
    }


    render() {
        return (
            <div className="main-cont">
                <div className="projects-top">
                    <h1>Projects</h1>
                    <p>Here are some of the project I have been working on recently:</p>
                    <div className="project-box">
                        <div className="pcol left">
                            <div>
                                <Tooltip followCursor="true" 
                                position="bottom" trigger="mouseenter" html={(
                                    <div id="catch-em-pic"></div>)}>
                                    <h2><a className="project-btn" id="catch-em" target="_blank" rel="noopener noreferrer" href="https://github.com/sherry13131/CatchEm">CatchEm* web app</a></h2>
                                </Tooltip>
                                <p>- An online RPG game that allows users to interact with others in the world of Pokémon!</p>
                                <p>- Having real-time battling between your friends</p>
                                <p>- Has a Weather-based Pokémon encounters on map</p>
                            </div>
                                <Tooltip followCursor="true" 
                                position="bottom" trigger="mouseenter" html={(
                                    <div id="bank-pic"></div>)}>
                                    <h2><a className="project-btn" id="bank" target="_blank" rel="noopener noreferrer" href="https://github.com/sherry13131/Android-Online-Bank-System-CSCB07-">Android online bank system</a></h2>
                                </Tooltip>
                            <h2>And of course this website !!!</h2>
                        </div>
                        <div className="pcol">
                            <h2>Home database library</h2>
                            <h2>Minesweeper</h2>
                            <h2>And more on github !</h2>
                        </div>
                    </div>  
                </div>
                <div className="project-bottom">
                
                </div>
                
            </div>
        );
    }
};
export default Projects = withRouter(Projects);
