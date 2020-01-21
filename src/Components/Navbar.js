import React, { Component } from 'react'
import { Breadcrumbs, Link } from '@material-ui/core';
import { connect } from 'react-redux';

class Navbar extends Component {
  aboutClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: this.props.aboutHeight,
      behavior: 'smooth',
    });
  }
  experienceClick = (e) => {
    e.preventDefault();
    console.log(this.props.expHeight);
    window.scrollTo({
      top: this.props.expHeight,
      behavior: 'smooth',
    });
  }
  skillsClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: this.props.skillsHeight,
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
    aboutHeight: state.navbar.about,
    expHeight: state.navbar.experience,
    skillsHeight: state.navbar.skills
  }
}

export default connect(mapStateToProps, null)(Navbar)