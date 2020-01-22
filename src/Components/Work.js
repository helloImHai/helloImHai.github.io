import React, { Component } from "react";
import { Container } from "@material-ui/core";
import profilePic from "../Utils/profile.png";
import ScrollButton from "./ScrollButton.js";

import { connect } from "react-redux";
import {Fade} from "react-awesome-reveal";

import "../Styles/Components/Work/Work.css";

class Work extends Component {
  render() {
    return (
      <Container className="container-work" maxWidth="xl" id="workSection">
        <Fade big cascade duration={2000} fraction={0.6} triggerOnce={true}>
            <Container className="container-inner" maxWidth="md">
              <h2>Work Experience</h2>
              <br />
              <ScrollButton to="constructionSection" />
            </Container>
        </Fade>
      </Container>
    );
  }
}

export default connect(null, null)(Work);
