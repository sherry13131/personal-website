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
                    <p>Here are some of the projects I have been working on recently.</p>
                    <p><strong>Hover</strong> on titles for some cool screenshots! Click on titles will take you to code homepage.</p>
                    <div className="project-box">
                        <div className="pcol pleft">
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
                            <div>
                                <Tooltip followCursor="true" 
                                position="bottom" trigger="mouseenter" html={(
                                    <div id="minesweeper-pic"></div>)}>
                                    <h2><a className="project-btn" id="minesweeper" target="_blank" rel="noopener noreferrer" href="https://github.com/sherry13131/Minesweeper-Java">Minesweeper</a></h2>
                                </Tooltip>
                                <p>- Remake traditional game minesweeper in Java</p>
                                <p>- Simple game control and clean menu</p>
                                <p>- Different levels are available</p>
                            </div>
                            <div>
                                <Tooltip followCursor="true" 
                                position="bottom" trigger="mouseenter" html={(
                                    <div id="home-db-pic"></div>)}>
                                    <h2><a className="project-btn" id="home-db" target="_blank" rel="noopener noreferrer" href="https://github.com/sherry13131/my-home-library">Home database library</a></h2>
                                </Tooltip>
                                <p>- A database can store data of collections of books, movies and music albums</p>
                                <p>- Included basic operation: insertion, search, update and removal</p>
                                <p>- Included some report options for quick review, e.g. searching books with similar topics, frequent publishers, etc</p>
                            </div>
                        </div>
                        <div className="pcol pright">
                            <div>
                                <Tooltip followCursor="true" 
                                position="bottom" trigger="mouseenter" html={(
                                    <div id="barcode-pic"></div>)}>
                                    <h2><a className="project-btn" id="barcode" target="_blank" rel="noopener noreferrer" href="https://github.com/sherry13131/Products-organizing-app">Product organizing App</a></h2>
                                </Tooltip>
                                <p>- A small-scale barcode scanner android app that helps organize your products</p>
                                <p>- Supporting various common barcode types</p>
                                <p>- Aiming for small scale companies and personal use</p>
                            </div>
                            <div>
                                <Tooltip followCursor="true" 
                                position="bottom" trigger="mouseenter" html={(
                                    <div id="bank-pic"></div>)}>
                                    <h2><a className="project-btn" id="bank" target="_blank" rel="noopener noreferrer" href="https://github.com/sherry13131/Android-Online-Bank-System-CSCB07-">Android online bank system</a></h2>
                                </Tooltip>
                                <p>- Online Banking Android App with various options for different type of users</p>
                                <p>- Data in database are serializable, support coherent versioning</p>
                                <p>- Users can send/post messages to specific user/user group</p>
                            </div>
                            <h2>And of course this website !!!</h2>
                        </div>
                    </div>  
                </div>                
            </div>
        );
    }
};
export default Projects = withRouter(Projects);
