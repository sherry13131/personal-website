/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router-dom";
import Typing from 'react-typing-animation';
import Emoji from 'a11y-react-emoji'
import Particles from 'react-particles-js';
import '../styles/homepage.css';

class HomepageContent extends Component {
    
    sentences = ["Welcome to my website! ✨✨✨",
                "Coding is funnn~ ❤️",
                "To code or not to code, this is a ❔",
                "Time management is important, to get work done, and 💤",
                "Feel free to say hi to me xD",
                "This background picture was taken at UofT Scarborough!"
                ];
    state = {
        showThis: " ",
        showThisOnScreen: "",
        clear: true
    }

    autoField = React.createRef();

    randomsentence = () => {
        let num = Math.floor(Math.random() * this.sentences.length);
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

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.clear === nextState.clear && this.state.showThis === nextState.showThis) {
            return false;
        } else {
            this.setState({ clear: false });
            return true;
        }
    }

    render() {
        let { showThis } = this.state;
        return (
            <Fragment>
<Particles
    style={{"position": "absolute"}}
    params={{
	    "particles": {
	        "number": {
	            "value": 160,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
	}} />

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
                </div>
            </Fragment>
        );
    }
}

export default HomepageContent = withRouter(HomepageContent);;