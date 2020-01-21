import React, { Component } from "react";
import { Container } from "@material-ui/core";
import ScrollButton from "./ScrollButton.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../Styles/Components/Skills/Skills.css";

import { connect } from "react-redux";

class Skills extends Component {
  render() {
    return (
      <Container className="container-4" maxWidth="xl" id="skillsSection">
        <h2>Skills</h2>
        <br />
        <Container className="container-inner" maxWidth="md">
          <div>
            <h4 className="languages">Languages</h4>
            <ul>
              <div>Javascript</div>
              <div>HTML</div>
              <div>CSS/Sass/Less</div>
              <div>Java</div>
              <div>C</div>
              <div>Python</div>
            </ul>
          </div>
          <div>
            <h4 className="frameworkLib">Framework and Libraries</h4>
            <ul>
              <div>React</div>
              <div>NodeJs</div>
              <div>Redux</div>
              <div>Saga</div>
              <div>Ajax</div>
              <div>JQuery</div>
            </ul>
          </div>
          <div>
            <h4 className="otherTech">Other Technologies</h4>
            <ul>
              <div>Github</div>
              <div>NPM</div>
              <div>Yarn</div>
            </ul>
          </div>
        </Container>
        <ScrollButton to="constructionSection" />
      </Container>
    );
  }
}

export default connect(null, null)(Skills);
