/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import Typing from 'react-typing-animation';
import '../styles/homepage.css';

class HomepageContent extends Component {
    
    sentences = ["Welcome to my website!!! xD",
                "Coding is funnn~",
                "To code or not to code, this is a question.",
                "Time management is important, since you need to sleep",
                "Feel free to say hi to Me xD"
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
            // this.typingAnimation();
            console.log("randomed");
        }, 5000); 
    }

    typingAnimation = () => {
        let i = 0;
        let animation = "";
        let speed = 100;
        
        this.helper(i,animation,speed);
    }

    helper = (i, animation, speed) => {
        if (i < this.state.showThis.length) {
            animation += this.state.showThis.charAt(i);
            this.setState({ showThisOnScreen: animation });
            i++;
            
            setTimeout(this.helper(i,animation,speed), speed);
        }
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
            <div className="hp-content-cont">
                {/* <zz className="auto-type"> */}
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
                        <div className="description">A student that willing to learn and explore the world.</div>
                        <div className="description">Love to keep up on new technologies and accept challenges.</div>
                        <div className="description">A cat lover and sports enthusiast.</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomepageContent;