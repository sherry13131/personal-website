import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router-dom";
import Resume from './Resume.js';
import '../styles/contact.css'

class Contact extends Component {

    static routerProps = {
        path: '/contact',
        exact: true
    }

    render() {
        return (
            <Fragment>
                <h1 className="main">
                    Contact and more information
                </h1>
                <div className="contact-content">
                    <Resume></Resume>
                </div>
                
                
            </Fragment>
        );
    }
};
export default Contact = withRouter(Contact);