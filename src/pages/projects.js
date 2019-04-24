import React, { Component } from 'react';
import '../styles/projects.css';

export class Projects extends Component {

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
                    <div className="project-btns">
                        <ul>
                            <li>CatchEm* web app</li>
                            <li>Home database library</li>
                            <li>Minesweeper</li>
                            <li>Android online bank system</li>
                            <li>And of course this website !!!</li>
                            <li>And more on github !</li>
                        </ul>
                    </div>
                </div>
                <div className="project-bottom">
                
                </div>
            </div>
        );
    }
};
