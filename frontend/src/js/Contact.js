import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router-dom";
import ContactBox from './ContactBox.js';
import ContactList from './ContactList.js';
import '../styles/contact.css'

import {
    isMobile
} from "react-device-detect";

class Contact extends Component {

    static routerProps = {
        path: '/contact',
        exact: true
    }

    constructor() {
        super();
        this.state = {
            rowFlex: true,
            isMobile: false
        }
    }
    updateDimensions() {
        if(window.innerWidth < 1320) {
            this.setState({ rowFlex: false });
        } else {
            this.setState({ rowFlex: true });
        }
    }

    /**
     * Add event listener
     */
    componentDidMount = () => {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
        if (isMobile) {
            this.setState({ isMobile: true });
        }
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    render() {
        let { rowFlex, isMobile } = this.state;
        return (
            <Fragment>
                <h1 className="main">
                    Contact and more information
                </h1>
                <div className={(rowFlex && !isMobile) ? "contact-wrap" : "contact-wrap-col"}>
                    <div className="contact-content">
                        <ContactList></ContactList>
                    </div>
                    <div className="contact-fillbox">
                        <ContactBox></ContactBox>
                    </div>
                </div>
            </Fragment>
        );
    }
};
export default Contact = withRouter(Contact);