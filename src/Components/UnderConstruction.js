import React, { Component } from "react";
import { Container } from "@material-ui/core";
import "../Styles/Components/Contact/Contact.css";

import { connect } from "react-redux";

class UnderConstruction extends Component {
  render() {
    return (
      <Container
        className="container-3"
        maxWidth="xl"
        id="constructionSection"
      >
        <Container maxWidth="md">
          <h1>UNDER CONSTRUCTION</h1>
        </Container>
      </Container>
    );
  }
}

export default connect(null, null)(UnderConstruction);
