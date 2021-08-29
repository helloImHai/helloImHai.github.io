import React from "react";
import { Container, Button } from "@material-ui/core";

import { Fade } from "react-awesome-reveal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
    return (
      <Container
        maxWidth="md"
      >
        <Fade big duration={1500} fraction={0.1} triggerOnce={true}>
          <Container maxWidth="md">
              <a
                href={"https://www.facebook.com/profile.php?id=100033460157841"}
                target={"_blank"}
              >
                <FontAwesomeIcon  icon={faFacebookF} />
              </a>
              <a href={"https://github.com/helloImHai"} target={"_blank"}>
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href={"mailto:1503.hai.nguyen@gmail.com"} target={"_blank"}>
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a
                href={"https://www.instagram.com/hainguyen__/"}
                target={"_blank"}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href={"https://www.linkedin.com/in/helloimhai/"}
                target={"_blank"}
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            <br /> <br />
            <Button variant="contained" className="button" href="/resume.pdf">
              Grab my resume
            </Button>
            <Button
              variant="contained"
              className="button"
              href="/transcript.pdf"
            >
              Peek my transcript
            </Button>
          </Container>
        </Fade>
      </Container>
    );
}
