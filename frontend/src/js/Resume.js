import React, { Component,Fragment } from 'react';
import Pdf from '../media/resume/SherryMa-Resume.pdf';
import '../styles/underline.css';
import {
  isMobile
} from "react-device-detect";

class Resume extends Component {

  constructor() {
    super();
    this.state = {
      isMobile: false
    }
  }

  componentDidMount = () => {
    if (isMobile) {
      this.setState({ isMobile: true });
    }
  }

  render() {
    let { isMobile } = this.state;
    return (
      <Fragment>
        <p id="contact-line">Feel free to contact me!</p>
        Resume:
        <div className="resume-div">
          <a className="contact-link custom-underline" href={Pdf} target="_blank" rel="noopener noreferrer" >Link to view resume.</a>
        </div>
        GitHub:
        <div className="resume-div">
          <a className="contact-link custom-underline" href="https://github.com/sherry13131" target="_blank" rel="noopener noreferrer" >Link to my GitHub homepage.</a>
        </div>
        LinkedIn:
        <div className="resume-div">
          <a className="contact-link custom-underline" href="https://www.linkedin.com/in/sherry-hyma/" target="_blank" rel="noopener noreferrer" >Link to my LinkedIn homepage.</a>
        </div>
        Email:
        <div className="resume-div">
          <div className={isMobile ? "resume-desc resume-desc-phone" : "resume-desc"}>You can leave me a message here and it will send to my email, or</div>
          <a className="contact-link custom-underline" href="mailto:sherry.hyma@gmail.com" target="_blank" rel="noopener noreferrer" >Click here to send me an email.</a>
        </div>
      </Fragment>
    );
  }
}

export default Resume;
