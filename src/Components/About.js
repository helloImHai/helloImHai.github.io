import React, { Component } from "react";
import { Container } from "@material-ui/core";
import profilePic from "../Utils/profile.png";
import ScrollButton from "./ScrollButton.js";

import { connect } from "react-redux";
import {Fade} from "react-awesome-reveal";

class About extends Component {
  render() {
    return (
      <Container className="container-2" maxWidth="xl" id="aboutSection">
        <Fade big cascade duration={2000} fraction={0.5} triggerOnce={true}>
            <Container className="container-inner" maxWidth="md">
              <h2>About Me</h2>
              <br />
              <img className="profile-pic" src={profilePic} alt="profile-pic" />
              <p className="description">
                <br />
                Hello, my name is Hai, a Year 2{" "}
                <strong>Computer Science</strong> student at the{" "}
                <strong>National University of Singapore</strong>. I love what I
                am studying and I am still in the midst of exploring all the
                possibilities that comes with diving into the field of
                Computing. Most of my experience lies in Web development and
                Software Engineering, but I'm also enthusiastic about
                Algorithms, Artificial Intelligence and Information Security.
                Right now, I'm looking for opportunities that will broaden my
                skills and knowledge, while at the same time allow me to
                contribute and leave a positive impact.
                <br />
                <br />
                When I am not coding I like kayaking, eating, and gymming. A
                weird hobby of mine is translating English songs into different
                languages.
                <br />
                <br />
              </p>
              <ScrollButton to="skillsSection" />
            </Container>
        </Fade>
      </Container>
    );
  }
}

export default connect(null, null)(About);
