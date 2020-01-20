import React, { Component } from 'react'
import { Breadcrumbs, Link } from '@material-ui/core';

class Navbar extends Component {
  render() {
    return (
      <Breadcrumbs aria-label="breadcrumb" className="nav-bar">
        <Link color="textPrimary" href="/">
          ABOUT
        </Link>
        <Link color="textPrimary" href="/">
          EXPERIENCE
        </Link>
        <Link color="textPrimary" href="/">
          SKILLS
        </Link>
      </Breadcrumbs>
    );
  }
}
export default Navbar;