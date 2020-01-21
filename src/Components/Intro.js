import React, { Component } from "react";
import { Container } from "@material-ui/core";
import ScrollButton from "./ScrollButton.js";

class Intro extends Component {
  getSectionRef = el => {
    this.sectionRef = el;
  };

  onScrollButtonClick = e => {
    console.log(this.sectionRef.scrollHeight);
    if (this.sectionRef) {
      window.scrollTo({
        top: this.sectionRef.scrollHeight,
        behavior: "smooth"
      });
    }
  };

  render() {
    return (
      <Container className="container-1" maxWidth="xl" ref={this.getSectionRef}>
        <Container className="container-inner" maxWidth="md">
          <h1 className="greeting">
            HELLO <strong className="friend-name">FRIEND</strong>,<br />
            I'M <strong className="my-name">HAI</strong>!
          </h1>
          <br />
          <h2 className="short-line">
            I like to build things and solve problems.
          </h2>
        </Container>
        <ScrollButton handleButtonClick={this.onScrollButtonClick} />
      </Container>
    );
  }
}

export default Intro;
