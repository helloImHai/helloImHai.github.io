import React, { Component } from "react";
import { Container } from "@material-ui/core";
import ScrollButton from "./ScrollButton.js";

import { Fade } from "react-awesome-reveal";

import "../Styles/Components/Skills/Skills.css";

import { connect } from "react-redux";

class Skills extends Component {
  render() {
    return (
      <Container
        className="container-4"
        maxWidth="xl"
        id="skillsSection"
        fraction={0.05}
      >
        <Fade big duration={1500} fraction={0.1} triggerOnce={true}>
          <Container className="container-inner" maxWidth="md">
            <h2>Skills</h2>
            <br />
            <div className="baby">
              <div className="item">
                <h4 className="cLanguages">Languages</h4>
                <ul className="list">
                  {[
                    "Javascript",
                    "HTML",
                    "CSS/Less",
                    "Java",
                    "C",
                    "Python",
                    "Golang",
                    "SQL",
                  ].map((language) => (
                    <div>{language}</div>
                  ))}
                </ul>
              </div>
              <div className="item">
                <h4 className="frameworkLib">Framework and Libraries</h4>
                <ul>
                  {[
                    "React",
                    "NodeJs",
                    "Express",
                    "Redux",
                    "Saga",
                    "Jquery",
                    "Ajax",
                    "Play FW",
                    "Kafka",
                  ].map((language) => (
                    <div>{language}</div>
                  ))}
                </ul>
              </div>
              <div className="item">
                <h4 className="otherTech">Other Technologies</h4>
                <ul>
                  <div>Github</div>
                  <div>NPM</div>
                  <div>Yarn</div>
                  <div>REST API</div>
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
            <br />
            <ScrollButton to="workSection" />
          </Container>
        </Fade>
      </Container>
    );
  }
}

export default connect(null, null)(Skills);
