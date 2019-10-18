/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router-dom";
import Typing from 'react-typing-animation';
import Emoji from 'a11y-react-emoji'
import Particles from 'react-particles-js';
import '../styles/homepage.css';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";

class HomepageContent extends Component {
    
    sentences = ["Welcome to my website! ✨✨✨",
                "Coding is funnn~ ❤️",
                "To code or not to code, that is the ❔",
                "Time management is important, to get work done, and 💤",
                "Feel free to say hi to me xD",
                "I could either watch it happen or be a part of it. -Elon Musk"
                ];
    sentencesPhone = ["Welcome to my website! ✨✨✨",
                "Technologies, and cats 🐱",
                "I could either watch it happen or be a part of it."
                ];
    state = {
        showThis: " ",
        showThisOnScreen: "",
        clear: true
    }

    autoField = React.createRef();

    randomsentence = () => {
        if (isMobile) {
            let num = Math.floor(Math.random() * this.sentencesPhone.length);
            let sent = this.sentencesPhone[num];
            this.setState({ showThis: sent });
        } else {
            let num = Math.floor(Math.random() * this.sentences.length);
            let sent = this.sentences[num];
            this.setState({ showThis: sent });
        }
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
        if (isMobile) {
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
                    <Typing speed={50} className="auto-type auto-type-phone" loop={true} onFinishedTyping={this.randomsentence}>
                        <span>{ showThis }</span>
                        <Typing.Backspace count={showThis.length} delay={5000}/>
                        <Typing.Delay ms={2000} />
                    </Typing>
                    <div className="hp-content hp-phone">
                        <div className="hp-phone-wrap">
                            <div className="myName">Sherry Ma</div>
                            <div className="content" id="title">Student at University of Toronto Scarborough</div>
                            <div className="content" id="title">Software Developer</div>
                            <div className="social-btns-cont">
                                <a className="social-btn" id="linkedin" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sherry-hyma/"></a>
                                <a className="social-btn" id="github" target="_blank" rel="noopener noreferrer" href="https://github.com/sherry13131"></a>
                                <a className="social-btn" id="mail" target="_blank" rel="noopener noreferrer" href="mailto:sherry.hyma@gmail.com"></a>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )
        }
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
                    <BrowserView>
                        <Typing speed={50} className="auto-type" loop={true} onFinishedTyping={this.randomsentence}>
                            <span>{ showThis }</span>
                            <Typing.Backspace count={showThis.length} delay={5000}/>
                            <Typing.Delay ms={2000} />
                        </Typing>
                    </BrowserView>
                    <BrowserView>
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
                    </BrowserView>
                </div>
            </Fragment>
        );
    }
}

export default HomepageContent = withRouter(HomepageContent);;
