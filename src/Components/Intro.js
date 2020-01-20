import React, { Component } from 'react'
import { Container } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'

class Intro extends Component {
  getSectionRef = el => {
    this.sectionRef = el;
  }

  onButtonClick = e => {
    if (this.sectionRef) {
      window.scrollTo({
        top: this.sectionRef.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

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
        <FontAwesomeIcon className="arrow-down" icon={faArrowCircleDown} onClick={this.onButtonClick}/>
      </Container>
    );
  }
}

export default Intro;