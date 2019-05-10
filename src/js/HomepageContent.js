/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import { NavLink, withRouter } from "react-router-dom";
import Typing from 'react-typing-animation';
import Emoji from 'a11y-react-emoji'
import '../styles/homepage.css';

class HomepageContent extends Component {
    
    sentences = ["Welcome to my website! ✨✨✨",
                "Coding is funnn~ ❤️",
                "To code or not to code, this is a ❔",
                "Time management is important, to get work done, and 💤",
                "Feel free to say hi to me xD"
                ];
    state = {
        showThis: " ",
        showThisOnScreen: ""
    }

    randomsentence = () => {
        let num = Math.floor(Math.random() * 5);
        let sent = this.sentences[num];
        this.setState({ showThis: sent });
    }

    startInterval = () => {
        this.autoInterval = setTimeout(() => {
            this.randomsentence();
        }, 5000); 
    }

    componentDidMount() {
        this.startInterval();
    }

    componentWillUnmount() {
        clearInterval(this.autoInterval);
    }

    render() {
        let { showThis } = this.state;
        return (
            <div className="hp-content-cont noselect">
                <Typing speed={50} className="auto-type" loop={true} onFinishedTyping={this.randomsentence}>
                    <span>{ showThis }</span>
                    <Typing.Backspace count={showThis.length} delay={5000}/>
                    <Typing.Delay ms={2000} />
                </Typing>
                <div className="hp-content">
                    <div className="hp-left">
                        <div className="myName">Sherry Ma</div>
                        <div className="content" id="title">Student at University of Toronto Scarborough</div>
                        <div className="content" id="title">Software Developer</div>
                        <div className="social-btns-cont">
                            <a className="social-btn" id="linkedin" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sherry-hyma/"></a>
                            <a className="social-btn" id="github" target="_blank" rel="noopener noreferrer" href="https://github.com/sherry13131"></a>
                            <a className="social-btn" id="mail" target="_blank" rel="noopener noreferrer" href="mailto:sherry.hyma@gmail.com"></a>
                        </div>
                    </div>
                    <div className="hp-right">
                        <div className="description">A student that is willing to learn and explore the world <Emoji symbol="🌏" label="earth" /></div>
                        <div className="description">Love to keep up on new technologies and accept challenges.</div>
                        <div className="description">A cat lover <Emoji symbol="🐱" label="cat" /> and sports enthusiast.</div>
                    </div>
                </div>
                <div className="page-dir">
                <NavLink exact to="/about" >About</NavLink>
                <NavLink exact to="/about" >About</NavLink>
                <NavLink exact to="/about" >About</NavLink>
                </div>
            </div>
        );
    }
}

export default HomepageContent = withRouter(HomepageContent);;