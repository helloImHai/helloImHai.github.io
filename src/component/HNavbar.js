import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import MenuIcon from '@material-ui/icons/Menu';
import { Box, ButtonBase, List, Drawer, Slide, Button, ListItem } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-scroll";

const useStyles = makeStyles({
    paper: {
        background: 'black',
        opacity: 0.8
    }
});

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
    const styles = useStyles()
    const buttons = ["about", "experience", "projects", "contact"].map((sectionId, key) => {
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
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1000)
    const [isDrawerOpen, setDrawerOpen] = useState(false)

    const updateMedia = () => {
        setDesktop(window.innerWidth > 1000);
    };
    
    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });
    
    return (
        <HideOnScroll {...props}>
            <AppBar position="sticky" color="transparent" elevation={0} >
                <Toolbar style={{marginLeft: "auto"}}>
                    { isDesktop 
                        ? buttons 
                        : <>
                            <Button onClick={() => setDrawerOpen(true)}><MenuIcon/></Button>
                            <Drawer anchor="left" classes={{ paper: styles.paper}} open={isDrawerOpen} onClose={() => setDrawerOpen(false)}>
                                <List>
                                    {
                                        ["about", "experience", "projects", "contact"].map((sectionId, key) => {
                                            return <ListItem>
                                                <Link
                                                    activeClass="active"
                                                    to={sectionId}
                                                    spy={true}
                                                    smooth={true}
                                                    duration={500}
                                                    style={{
                                                        margin: 20
                                                    }}
                                                >
                                                    <ButtonBase>
                                                        <Typography>{sectionId}</Typography>
                                                    </ButtonBase>
                                                </Link>
                                            </ListItem>
                                        })
                                    }
                                </List>
                            </Drawer>
                        </>
                    }
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    );
}

export default HNavbar;
