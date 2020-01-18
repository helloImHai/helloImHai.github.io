import React, { Component } from 'react'
import { Container } from '@material-ui/core';
import profilePic from "../Utils/profile.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown, faDumbbell, faSearch, faHammer } from '@fortawesome/free-solid-svg-icons'

class About extends Component {
  render() {
    return (
      <Container className="container-2" maxWidth="xl">
        <Container className="container-inner" maxWidth="md">
          <h2>About Me</h2>
          <img className="profile-pic" src={profilePic} alt="profile-pic" />
          <p className="description">
            Hello, my name is Hai, a Year 2 <strong>Computer Science</strong> student at the <strong>National University of Singapore</strong>.
            I love what I am studying and I am still in the midst of exploring all the possibilities that comes with diving 
            into the field of Computing. Most of my experience lies in Web development and Software Engineering, but I'm also 
            enthusiastic about Algorithms, Artificial Intelligence and Information Security. Right now, I'm looking for opportunities 
            that will broaden my skills and knowledge, while at the same time allow me to contribute and leave a positive impact.
            <br /><br />
            When I am not coding I like kayaking, eating, and gymming. A weird hobby of mine is translating English songs
            into different languages.
            <br /><br />
          </p>
        </Container>
        <div>
          <div className="hobby-item">
            <FontAwesomeIcon className="hobby-icon" icon={faSearch}></FontAwesomeIcon>
            <h5>Learn</h5>
          </div>
          <div className="hobby-item">
            <FontAwesomeIcon className="hobby-icon" icon={faHammer}></FontAwesomeIcon>
            <h5>Build</h5>
          </div>
          <div className="hobby-item">
            <FontAwesomeIcon className="hobby-icon" icon={faDumbbell}></FontAwesomeIcon>
            <h5>Gym</h5>
          </div>
        </div>
        <FontAwesomeIcon className="arrow-down" icon={faArrowCircleDown} />
      </Container>
    );
  }
}

export default About;