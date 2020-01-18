import React, { Component } from 'react'
import { Breadcrumbs, Link } from '@material-ui/core';

class Navbar extends Component {
  render() {
    return (
      <Breadcrumbs aria-label="breadcrumb" className="nav-bar">
        <Link color="inherit" href="/">
          ABOUT
        </Link>
        <Link color="inherit" href="/">
          EXPERIENCE
        </Link>
        <Link color="inherit" href="/">
          SKILLS
        </Link>
      </Breadcrumbs>
    );
  }
}
export default Navbar;