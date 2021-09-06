import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Box, ButtonBase, Slide } from '@material-ui/core';
import { Link } from "react-scroll";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function HNavbar(props) {
    return (
        <HideOnScroll {...props}>
            <AppBar position="sticky" color="transparent" elevation={0} >
                <Toolbar style={{marginLeft: "auto"}}>
                    {
                        ["about", "experience", "projects", "contact"].map((sectionId, key) => {
                            return <Box key={`navbar-item-${sectionId}-${key}`} m={3}>
                                <Link
                                    activeClass="active"
                                    to={sectionId}
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    <ButtonBase>
                                        <Typography>{sectionId}</Typography>
                                    </ButtonBase>
                                </Link>
                            </Box>
                        })
                    }
                    
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    );
}

export default HNavbar;
