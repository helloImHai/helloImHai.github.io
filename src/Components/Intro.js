import React, { Component } from "react";
import { Container } from "@material-ui/core";
import ScrollButton from "./ScrollButton.js";

class Intro extends Component {
  render() {
    return (
      <Container className="container-1" maxWidth="xl">
        <Container className="container-inner" maxWidth="md">
          <h1 className="greeting">
            HELLO <strong className="friend-name">FRIEND</strong>,<br />
            I'M <strong className="my-name">HAI</strong>!
          </h1>
          <br />
          <h2 className="short-line">
            I like to <strong className="desc-word">build things</strong>
            {" and "}<strong className="desc-word">solve problems</strong>.
          </h2>
        </Container>
        <ScrollButton to="aboutSection" />
      </Container>
    );
  }
}

export default Intro;
