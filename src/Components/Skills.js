import React, { Component } from "react";
import { Container } from "@material-ui/core";
import ScrollButton from "./ScrollButton.js";

import { Fade } from "react-awesome-reveal";

import "../Styles/Components/Skills/Skills.css";

import { connect } from "react-redux";

class Skills extends Component {
  render() {
    return (
      <Container className="container-4" maxWidth="xl" id="skillsSection">
        <Fade big duration={1500} fraction={0.1} triggerOnce={true}>
          <Container className="container-inner" maxWidth="md">
            <h2>Skills</h2>
            <br />
            <div className="baby">
              <div className="item">
                <h4 className="cLanguages">Languages</h4>
                <ul className="list">
                  <div>Javascript</div>
                  <div>HTML</div>
                  <div>CSS/Sass/Less</div>
                  <div>Java</div>
                  <div>C</div>
                  <div>Python</div>
                </ul>
              </div>
              <div className="item">
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
              <div className="item">
                <h4 className="otherTech">Other Technologies</h4>
                <ul>
                  <div>Github</div>
                  <div>NPM</div>
                  <div>Yarn</div>
                </ul>
              </div>
              <div className="item">
                <h4 className="hLanguages">Human Languages</h4>
                <ul>
                  <div>English</div>
                  <div>Vietnamese</div>
                </ul>
              </div>
            </div>
            <br/>
            <ScrollButton to="workSection" />
          </Container>
          
        </Fade>
      </Container>
    );
  }
}

export default connect(null, null)(Skills);
