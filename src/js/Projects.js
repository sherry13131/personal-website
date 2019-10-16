import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import '../styles/projects.css';
import { Tooltip } from 'react-tippy';
import Tippy, {followCursor} from 'tippy.js';
import 'react-tippy/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import 'tippy.js/animations/scale-subtle.css';
import 'tippy.js/animations/scale-extreme.css';

class Projects extends Component {

    render() {
        new Tippy('#catch-em', {
            content: '<div id="catch-em-pic"></div>)}',
            theme: 'tomato',
            allowHTML: true,
            followCursor: true,
            interactiveBorder: 5,
            maxWidth: 100,
            arrow: true,
            placement: "right",
            animation: "scale-subtle"
        }, [followCursor]);
        new Tippy('#minesweeper', {
            content: '<div id="minesweeper-pic"></div>',
            theme: 'tomato',
            allowHTML: true,
            followCursor: true,
            interactiveBorder: 5,
            maxWidth: 100,
            arrow: true,
            placement: "right",
            animation: "scale-subtle"
        }, [followCursor]);
        new Tippy('#home-db', {
            content: '<div id="home-db-pic"></div>',
            theme: 'tomato',
            allowHTML: true,
            followCursor: true,
            interactiveBorder: 5,
            maxWidth: 100,
            arrow: true,
            placement: "right",
            animation: "scale-subtle"
        }, [followCursor]);
        new Tippy('#barcode', {
            content: '<div id="barcode-pic"></div>',
            theme: 'tomato',
            allowHTML: true,
            followCursor: true,
            interactiveBorder: 5,
            maxWidth: 100,
            arrow: true,
            placement: "right",
            animation: "scale-subtle",
        }, [followCursor]);
        new Tippy('#bank', {
            content: '<div id="bank-pic"></div>',
            theme: 'tomato',
            allowHTML: true,
            followCursor: true,
            interactiveBorder: 5,
            maxWidth: 1000,
            arrow: true,
            placement: "right",
            animation: "scale-subtle"
        }, [followCursor]);
        return (
            <div className="main-cont">
                <div className="projects-top">
                    <h1>Projects</h1>
                    <p>Here are some of the projects I have been working on recently.</p>
                    <p>
                    <Tooltip
                    title="Yes! Hover!"
                    position="bottom"
                    trigger="mouseenter"
                    arrow="true"
                    theme="dark"
                    >
                        <strong>Hover </strong>
                    </Tooltip>
                     on titles for some cool screenshots! Click on titles will take you to code homepage.</p>
                    <div className="project-box">
                        <div className="pcol pleft">
                            <div>
                                <h2><a id="catch-em" className="project-btn" target="_blank" rel="noopener noreferrer" href="https://github.com/sherry13131/CatchEm">CatchEm* web app</a></h2>
                                <p>- An online RPG game that allows users to interact with others in the world of Pokémon!</p>
                                <p>- Having real-time battling between your friends</p>
                                <p>- Has a Weather-based Pokémon encounters on map</p>
                            </div>
                            <div>
                                <h2><a className="project-btn" id="minesweeper" target="_blank" rel="noopener noreferrer" href="https://github.com/sherry13131/Minesweeper-Java">Minesweeper</a></h2>
                                <p>- Remake traditional game minesweeper in Java</p>
                                <p>- Simple game control and clean menu</p>
                                <p>- Different levels are available</p>
                            </div>
                            <div>
                                <h2><a className="project-btn" id="home-db" target="_blank" rel="noopener noreferrer" href="https://github.com/sherry13131/my-home-library">Home database library</a></h2>
                                <p>- A database which can store data of collections of books, movies and music albums</p>
                                <p>- Included basic operation: insertion, search, update and removal</p>
                                <p>- Included some report options for quick review, e.g. searching books with similar topics, frequent publishers, etc</p>
                            </div>
                        </div>
                        <div className="pcol pright">
                            <div>
                                <h2><a className="project-btn" id="barcode" target="_blank" rel="noopener noreferrer" href="https://github.com/sherry13131/Products-organizing-app">Product organizing App</a></h2>
                                <p>- A small-scale barcode scanner android app that helps organize your products</p>
                                <p>- Supporting various common barcode types</p>
                                <p>- Aiming for small scale companies and personal use</p>
                            </div>
                            <div>
                                <h2><a className="project-btn" id="bank" target="_blank" rel="noopener noreferrer" href="https://github.com/sherry13131/Android-Online-Bank-System-CSCB07-">Android online bank system</a></h2>
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
