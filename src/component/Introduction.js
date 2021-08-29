import React from "react";
import { Typography } from "@material-ui/core";
// import ScrollButton from "../Components/ScrollButton";
import useStyle from "../styling/styling";
import HContainer from "./HContainer"
import Typist from 'react-typist';

function Intro() {
    const classes = useStyle();
    return (
        <HContainer>
            <Typist startDelay={500} avgTypingDelay={50} cursor={{show: false}}>
                <Typography variant="h2">
                    hello <p className={classes.friend}>friend</p>,
                    <br/>
                    i'm <p className={classes.hai}>hai</p>.
                </Typography>
                <br/><br/>
                <Typography variant="h4">
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.
                </Typography>
            </Typist>
        </HContainer>
        // {/* <ScrollButton to="aboutSection" /> */}   
    );
}

export default Intro;
