import React, { Component } from 'react'
import { Container } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'

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
            I like to build things and solve problems.
          </h2>
        </Container>
        <FontAwesomeIcon className="arrow-down" icon={faArrowCircleDown} />
      </Container>
    );
  }
}

export default Intro;