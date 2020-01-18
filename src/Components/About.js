import React, { Component } from 'react'
import { Container } from '@material-ui/core';
import profilePic from "../Utils/profile.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'

class About extends Component {
  render() {
    return (
      <Container className="container-2" maxWidth="xl">
        <Container className="container-inner" maxWidth="md">
          <h2>About Me</h2>
          <img className="profile-pic" src={profilePic} alt="profile-pic" />
          <p className="description">
            Hello, my name is Hai, a Year 2 Computer Science student in the National University
            of Singapore. I love what I am studying and I am still in the midst of exploring all the possibilites
            that comes with diving into the field of Computing. Most of my experience lie in Web development and
            Software Engineering, but I'm also enthusiastic about Algorithms, Artificial Inteligence and Information Security.
            <br /><br />
            Right now, I'm looking for opportunities that will, broaden my skillset and knowledge and at the same time allow me to contribute and leave an impact.
            <br /><br />
          </p>
        </Container>
        <FontAwesomeIcon className="arrow-down" icon={faArrowCircleDown} />
      </Container>
    );
  }
}

export default About;