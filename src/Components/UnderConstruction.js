import React, { Component } from 'react'
import { Container } from '@material-ui/core';
import '../Styles/Components/Contact/Contact.css';

import {connect} from 'react-redux';
import {updateHeightExp, updateHeightSkills} from '../actions/navbarActions'

class UnderConstruction extends Component {
  getSectionRef = el => {
    this.sectionRef = el;
  }

  componentDidMount() {
    this.props.updateHeightExp(this.sectionRef.offsetTop);
    this.props.updateHeightSkills(this.sectionRef.offsetTop);
  }

  render() {
    return (
      <Container className="container-3" maxWidth="xl" ref={this.getSectionRef}>
        <Container maxWidth="md">
          <h1>
            UNDER CONSTRUCTION
          </h1>
        </Container>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateHeightExp: (height) => dispatch(updateHeightExp(height)),
    updateHeightSkills: (height) => dispatch(updateHeightSkills(height)),
  }
}

export default connect(null, mapDispatchToProps)(UnderConstruction)