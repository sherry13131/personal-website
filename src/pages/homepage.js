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
            <div className={["jumbotron", "overlay"].join(" ")} id="home-bg">
                <HomepageContent></HomepageContent>
            </div>
        );
    }
};

export const HomePage = withRouter(_HomePage);
