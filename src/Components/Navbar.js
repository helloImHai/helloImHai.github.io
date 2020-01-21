import React, { Component } from 'react'
import { Breadcrumbs, Link } from '@material-ui/core';
import { connect } from 'react-redux';

const NAVBAR_SIZE = 50;

class Navbar extends Component {
  aboutClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: this.props.aboutOffset - NAVBAR_SIZE,
      behavior: 'smooth',
    });
  }
  experienceClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: this.props.expOffset - NAVBAR_SIZE,
      behavior: 'smooth',
    });
  }
  skillsClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: this.props.skillsOffset - NAVBAR_SIZE,
      behavior: 'smooth',
    });
  }

  render() {
    return (
      <Breadcrumbs aria-label="breadcrumb" className="nav-bar">
        <Link color="textPrimary" href="/" onClick={this.aboutClick}>
          ABOUT
        </Link>
        <Link color="textPrimary" href="/" onClick={this.experienceClick}>
          EXPERIENCE
        </Link>
        <Link color="textPrimary" href="/" onClick={this.skillsClick}>
          SKILLS
        </Link>
      </Breadcrumbs>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    aboutOffset: state.navbar.about,
    expOffset: state.navbar.experience,
    skillsOffset: state.navbar.skills
  }
}

export default connect(mapStateToProps, null)(Navbar)