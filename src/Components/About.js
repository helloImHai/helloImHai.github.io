import React, { Component } from 'react'
import { Container } from '@material-ui/core';
import profilePic from "../Utils/profile.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ScrollButton from './ScrollButton.js';
import { faDumbbell, faSearch, faHammer } from '@fortawesome/free-solid-svg-icons'

import { connect } from 'react-redux'
import { updateHeightAbout } from '../actions/navbarActions'

class About extends Component {
  componentDidMount() {
    this.props.updateHeightAbout(this.sectionRef.offsetTop);
  }

  getSectionRef = el => {
    this.sectionRef = el;
  }

  onScrollButtonClick = e => {
    if (this.sectionRef) {
      window.scrollTo({
        top: this.sectionRef.scrollHeight + this.sectionRef.offsetTop,
        behavior: 'smooth',
      });
    }
  }
  render() {
    return (
      <Container className="container-2" maxWidth="xl" ref={this.getSectionRef}>
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
            <br />
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
        <ScrollButton handleButtonClick={this.onScrollButtonClick} />
      </Container>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return({
    updateHeightAbout: (height) => dispatch(updateHeightAbout(height))
  })
}

export default connect(null, mapDispatchToProps)(About);