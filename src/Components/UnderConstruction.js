import React, { Component } from "react";
import { Container } from "@material-ui/core";
import "../Styles/Components/UnderConstruction/UnderConstruction.css";
import { Fade } from "react-awesome-reveal";

import { connect } from "react-redux";

class UnderConstruction extends Component {
  render() {
    return (
      <Container className="container-3" maxWidth="xl" id="constructionSection">
        <Fade big duration={3000} triggerOnce={true} fraction={0.5}>
          <Container className="inner-container"maxWidth="md">
            <h1>UNDER CONSTRUCTION</h1>
          </Container>
        </Fade>
      </Container>
    );
  }
}

export default connect(null, null)(UnderConstruction);
