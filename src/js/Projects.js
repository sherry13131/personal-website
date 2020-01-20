import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router-dom";
import '../styles/projects.css';
import Tippy, {followCursor} from 'tippy.js';
// import Fade from 'react-reveal/Fade';
import 'react-tippy/dist/tippy.css';
import 'tippy.js/animations/scale-subtle.css';
import '../styles/underline.css';
import {
    isMobile
  } from "react-device-detect";

class Projects extends Component {
    
    renderMobile() {
        return(
            <Fragment>
                <div className={isMobile ? "projects-top projects-top-phone" : "projects-top" }>
                    <h1>Projects</h1>
                    <p>Here are some of the projects I have been working on recently.</p>
                    <p>
                    <strong id="strong-hover">Click </strong> on titles will take you to code homepage.</p>
                    <div className="project-box-phone">
                        <div>
                            <h2><a className="project-btn" id="bank">PokeBot</a></h2>
                            <h4 className="tech=p">Technologies: Node.js, MongoDB, Heroku</h4>
                            <p>- A Discord game bot which allows users do catching and trading Pokemon with friends</p>
                            <p>- Implemented functionalities and interface design for catch, inventory, shop, and several other commands</p>
                            <p>- Deployed the application through Heroku for public use</p>
                        </div>
                        <div>
                            <h2><a id="catch-em" className="project-btn" target="_blank" rel="noopener noreferrer" href="https://github.com/sherry13131/CatchEm">CatchEm* web app</a></h2>
                            <h4 className="tech=p">Technologies: React Framework, MongoDB</h4>
                            <p>- An online RPG game that allows users to interact with others in the world of Pokémon!</p>
                            <p>- Having real-time battling between your friends</p>
                            <p>- Has a Weather-based Pokémon encounters on map</p>
                        </div>
                        <div>
                            <h2><a className="project-btn" id="mediacat" target="_blank" rel="noopener noreferrer" href="https://github.com/UTMediaCAT/Voyage/tree/master-conversion">MediaCAT</a></h2>
                            <h4 className="tech=p">Technologies: Django Framework, Python</h4>
                            <p>- A web crawler that crawls news articles and tweets on Twitter. (Work project)</p>
                            <p>- Maintained the cloud instance which the web crawler is running on</p>
                            <p>- Created a batch upload feature for the crawler to crawl websites on given a set of Excel sheets</p>
                        </div>
                        <div>
                            <h2><a className="project-btn" id="home-db" target="_blank" rel="noopener noreferrer" href="https://github.com/sherry13131/my-home-library">Home database library</a></h2>
                            <h4 className="tech=p">Technologies: Java Swing, MySQL</h4>
                            <p>- A database which can store data of collections of books, movies and music albums</p>
                            <p>- Included basic operation: insertion, search, update and removal</p>
                            <p>- Included some report options for quick review, e.g. searching books with similar topics, frequent publishers, etc</p>
                        </div>
                        <div>
                            <h2><a className="project-btn" id="barcode" target="_blank" rel="noopener noreferrer" href="https://github.com/sherry13131/Products-organizing-app">Product organizing App</a></h2>
                            <h4 className="tech=p">Technologies: Android Studio, Java, MySQL</h4>
                            <p>- A small-scale barcode scanner android app that helps organize your products</p>
                            <p>- Supporting various common barcode types</p>
                            <p>- Aiming for small scale companies and personal use</p>
                        </div>
                        <div>
                            <h2><a className="project-btn" id="bank" target="_blank" rel="noopener noreferrer" href="https://github.com/sherry13131/Android-Online-Bank-System-CSCB07-">Android online bank system</a></h2>
                            <h4 className="tech=p">Technologies: Android Studio, Java, MySQL</h4>
                            <p>- Online Banking Android App with various options for different type of users</p>
                            <p>- Data in database are serializable, support coherent versioning</p>
                            <p>- Users can send/post messages to specific user/user group</p>
                        </div>
                    </div>  
                </div>
            </Fragment>
        )
    }

    render() {
        if (isMobile) {
            console.log("hey")
            return this.renderMobile()
        }
        
        new Tippy('#catch-em', {
            content: '<div id="catch-em-pic"></div>)}',
            theme: 'tomato',
            allowHTML: true,
            followCursor: true,
            interactiveBorder: 5,
            maxWidth: 100,
            arrow: true,
            placement: "right-top",
            animation: "scale-subtle",
        }, [followCursor]);

        new Tippy('#minesweeper', {
            content: '<div id="minesweeper-pic"></div>',
            theme: 'tomato',
            allowHTML: true,
            followCursor: true,
            interactiveBorder: 5,
            maxWidth: 100,
            arrow: true,
            placement: "right-top",
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
            placement: "right-top",
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
            placement: "right-top",
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
            placement: "right-top",
            animation: "scale-subtle"
        }, [followCursor]);
        new Tippy('#strong-hover', {
            content: "Yes! Hover!",
            theme: 'material',
            placement: "bottom",
            animation: "rubberBand"
        });

        return (
            <div className="main-cont">
                <div className="projects-top">
                    <h1>Projects</h1>
                    <p>Here are some of the projects I have been working on recently.</p>
                    <p>
                    <strong id="strong-hover">Hover </strong>
                     on titles for some cool screenshots! Click on titles will take you to code homepage.</p>
                    <div className="project-box">
                        <div className="pcol pleft">
                            <div>
                                <h2 className="ph2"><a id="catch-em" className="project-btn custom-underline" target="_blank" rel="noopener noreferrer" href="https://github.com/sherry13131/CatchEm">CatchEm* web app</a></h2>
                                <h4 className="tech">Technologies: React Framework, MongoDB</h4>
                                <p>- An online RPG game that allows users to interact with others in the world of Pokémon!</p>
                                <p>- Having real-time battling between your friends</p>
                                <p>- Has a Weather-based Pokémon encounters on map</p>
                            </div>
                            <div>
                                <h2 className="ph2"><a className="project-btn custom-underline" id="mediacat" target="_blank" rel="noopener noreferrer" href="https://github.com/UTMediaCAT/Voyage/tree/master-conversion">MediaCAT</a></h2>
                                <h4 className="tech">Technologies: Django Framework, Python</h4>
                                <p>- A web crawler that crawls news articles and tweets on Twitter. (Work project)</p>
                                <p>- Maintained the cloud instance which the web crawler is running on</p>
                                <p>- Created a batch upload feature for the crawler to crawl websites on given a set of Excel sheets</p>
                            </div>
                            <div>
                                <h2 className="ph2"><a className="project-btn custom-underline" id="home-db" target="_blank" rel="noopener noreferrer" href="https://github.com/sherry13131/my-home-library">Home database library</a></h2>
                                <h4 className="tech">Technologies: Java Swing, MySQL</h4>
                                <p>- A database which can store data of collections of books, movies and music albums</p>
                                <p>- Included basic operation: insertion, search, update and removal</p>
                                <p>- Included some report options for quick review, e.g. searching books with similar topics, frequent publishers, etc</p>
                            </div>
                        </div>
                        <div className="pcol pright">
                            <div>
                                <h2 className="ph2"><a className="project-btn custom-underline" id="pokebot">PokeBot</a></h2>
                                <h4 className="tech">Technologies: Node.js, MongoDB, Heroku</h4>
                                <p>- A Discord game bot which allows users do catching and trading Pokemon with friends</p>
                                <p>- Implemented functionalities and interface design for catch, inventory, shop, and several other commands</p>
                                <p>- Deployed the application through Heroku for public use</p>
                            </div>
                            <div>
                                <h2 className="ph2"><a className="project-btn custom-underline" id="barcode" target="_blank" rel="noopener noreferrer" href="https://github.com/sherry13131/Products-organizing-app">Product organizing App</a></h2>
                                <h4 className="tech">Technologies: Android Studio, Java, MySQL</h4>
                                <p>- A small-scale barcode scanner android app that helps organize your products</p>
                                <p>- Supporting various common barcode types</p>
                                <p>- Aiming for small scale companies and personal use</p>
                            </div>
                            <div>
                                <h2 className="ph2"><a className="project-btn custom-underline" id="bank" target="_blank" rel="noopener noreferrer" href="https://github.com/sherry13131/Android-Online-Bank-System-CSCB07-">Android online bank system</a></h2>
                                <h4 className="tech">Technologies: Android Studio, Java, MySQL</h4>
                                <p>- Online Banking Android App with various options for different type of users</p>
                                <p>- Data in database are serializable, support coherent versioning</p>
                                <p>- Users can send/post messages to specific user/user group</p>
                            </div>
                        </div>
                    </div>  
                </div>                
            </div>
        );
    }
};
export default Projects = withRouter(Projects);
