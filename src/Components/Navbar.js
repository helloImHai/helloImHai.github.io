import React, { Component } from "react";
import { Breadcrumbs } from "@material-ui/core";
import { connect } from "react-redux";

import { Link } from "react-scroll";

const NAVBAR_SIZE = 50;

class NavbarItem extends Component {
  render() {
    return (
      <Link
        activeClass="active"
        to={this.props.to}
        spy={true}
        smooth={true}
        offset={-NAVBAR_SIZE}
        duration={500}
        className="nav-bar-item"
      >
        {this.props.text}
      </Link>
    );
  }
}

class Navbar extends Component {
  render() {
    return (
      <Breadcrumbs aria-label="breadcrumb" className="nav-bar">
        <NavbarItem to={"aboutSection"} text="ABOUT" />
        <NavbarItem to={"constructionSection"} text="EXPERIENCE" />
        <NavbarItem to={"constructionSection"} text="SKILLS" />
      </Breadcrumbs>
    );
  }
}

export default connect(null, null)(Navbar);
