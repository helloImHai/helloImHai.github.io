import React, { Component } from "react";
import { Container } from "@material-ui/core";
import ScrollButton from "../Components/ScrollButton.js";
import { Fade } from "react-awesome-reveal";

class Intro extends Component {
  render() {
    return (
      <Container maxWidth="xl">
        <Fade big duration={3000} triggerOnce={true}>
          <Container maxWidth="md">
            <h1 className="greeting">
              HELLO <strong>FRIEND</strong>,<br />
              I'M <strong>HAI</strong>!
            </h1>
            <br />
            <h2 className="short-line">
              I like to <strong className="desc-word">build things</strong>
              {" and "}
              <strong className="desc-word">solve problems</strong>.
            </h2>
            <ScrollButton to="aboutSection" />
          </Container>
        </Fade>
      </Container>
    );
  }
}

export default Intro;
