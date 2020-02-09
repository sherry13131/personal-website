import React, { Component,Fragment } from 'react';
import { HiddenLink } from '../components/HiddenLink.js'
import { CONTACT } from '../values';
import '../styles/underline.css';
import {
  isMobile
} from "react-device-detect";

const ITEMS = Object.keys(CONTACT);

const CONTACT_LIST = (tag, key) => {
  const { link, alt, text } = CONTACT[tag];
  return (
    <Fragment key={key}>
      {tag}:
      <div className="resume-div">
        { tag === "Email" && isMobile ? <div className="resume-desc resume-desc-phone">You can leave me a message here or email me at</div> : null }
        { tag === "Email" && !isMobile ? <div className="resume-desc">You can leave me a message here or email me at</div> : null }
        <HiddenLink className="contact-link custom-underline" href={ link } alt={ alt } target="_blank" rel="noopener noreferrer">
          { text ? text : link }
        </HiddenLink>
        { tag === "Email" ? <div className="resume-desc">I will get back to you soon!</div> : null }
      </div>
    </Fragment>

  )
}

class ContactList extends Component {

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
    
    return (
      <Fragment>
        <p id="contact-line">Feel free to contact me!</p>
        <ul className="contact__items">{ ITEMS.map(CONTACT_LIST) }</ul>
      </Fragment>
    );
  }
}

export default ContactList;
