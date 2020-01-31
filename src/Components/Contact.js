import React, { Component } from "react";
import { Container } from "@material-ui/core";

import { Fade } from "react-awesome-reveal";

import "../Styles/Components/Contact/Contact.css";

import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

class Contact extends Component {
  render() {
    return (
      <Container
        className="container-contact"
        maxWidth="xl"
        id="contactSection"
        fraction={0.05}
      >
        <Fade big duration={1500} fraction={0.1} triggerOnce={true}>
          <Container className="container-inner" maxWidth="md">
            <div className="logos">
              <a
                href={"https://www.facebook.com/profile.php?id=100033460157841"}
                target={"_blank"}
              >
                <FontAwesomeIcon className="icon" icon={faFacebookF} />
              </a>
              <a href={"https://github.com/helloImHai"} target={"_blank"}>
                <FontAwesomeIcon className="icon" icon={faGithub} />
              </a>
              <a href={"mailto:1503.hai.nguyen@gmail.com"} target={"_blank"}>
                <FontAwesomeIcon className="icon" icon={faEnvelope} />
              </a>
              <a href={"https://www.instagram.com/hainguyen__/"} target={"_blank"}>
                <FontAwesomeIcon className="icon" icon={faInstagram} />
              </a>
              <a href={"https://www.linkedin.com/in/hai-nguyen-246346194/"} target={"_blank"}>
                <FontAwesomeIcon className="icon" icon={faLinkedin} />
              </a>
            </div>
          </Container>
        </Fade>
      </Container>
    );
  }
}

export default connect(null, null)(Contact);
