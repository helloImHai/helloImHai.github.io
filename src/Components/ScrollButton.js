import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import { Link, animateScroll as scroll } from "react-scroll";

export default class ScrollButton extends Component {
  render() {
    return (
      <Link
        activeClass="active"
        className="arrow-down" 
        to={this.props.to}
        spy={true}
        smooth={true}
        offset={-0}
        duration={500}
      >
        <FontAwesomeIcon icon={faArrowCircleDown} />
      </Link>
    );
  }
}
