import React, { Component, Fragment } from 'react';
import "../styles/contactbox.css";
require('dotenv').config();
const url = process.env.REACT_APP_APIHOST;
console.log(url);

class ContactBox extends Component {

    constructor(props) {
        super(props);
        this.errorBox = React.createRef();
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }    
    
    changeEmailHandler = event => {
        this.setState({
            email: event.target.value
        });
    }

    changeNameHandler = event => {
        this.setState({
            name: event.target.value
        });
    }

    changeMessageHandler = event => {
        this.setState({
            message: event.target.value
        });
    }

    cleanupContectBox = event => {
        this.setState({ name: "", email: "", message: "" });
    }

    validateForm() {
        return (
            this.state.name.length > 0 &&
            this.state.email.length > 0 &&
            this.state.message !== ""
        );
    }

    submitHandler = async (event) => {
        event.preventDefault();
        // validate
        if (this.validateForm()) {
            // api call
            try {
                await fetch(
                    url + "api/submit/",
                    { method: 'POST',
                      headers: {
                          'Content-Type': 'application/json'
                        },
                      body: JSON.stringify(this.state)
                    }
                ).then(res => {
                    this.errorBox.current.textContent = "Successfully sent!";
                    this.form.reset();
                });
            } catch(err) {
                if (err.response) {
                    this.errorBox.current.textContent = err.response.data.error;
                }
            };

        } else {
            this.errorBox.current.textContent = "Please double check your form";
        }
        this.setState({
            name: '',
            email: '',
            message: ''
        });
    }

    render() {
        return (
            <Fragment>
                <div className="form-style-8">
                    <h2>Leave me a message!</h2>
                    <form onSubmit={this.submitHandler} method="post"  ref={form => this.form = form}>
                        <input type="text" name="name" value={this.state.value} onChange={this.changeNameHandler} placeholder="Name" />
                        <input type="email" name="email" value={this.state.value} onChange={this.changeEmailHandler} placeholder="Email" />
                        <textarea placeholder="Message" type="text" value={this.state.value} onChange={this.changeMessageHandler}></textarea>
                        <input type="submit" value="Send Message" />
                    </form>
                </div>
                <div id="errorBox" ref={this.errorBox}></div>
            </Fragment>
        );
    }
}

export default ContactBox;