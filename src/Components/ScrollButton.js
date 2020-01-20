import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

export default class ScrollButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    }
  }
  toggleHover = () => {
    this.setState({ hover: !this.state.hover })
  }
  render() {
    var linkStyle;
    if (this.state.hover) {
      linkStyle = { cursor: 'pointer' }
    } else {
      linkStyle = { cursor: 'default' }
    }
    return (
      <FontAwesomeIcon
        className="arrow-down"
        style={linkStyle} icon={faArrowCircleDown}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover} 
        onClick={this.props.handleButtonClick}
      />
    );
  }
}