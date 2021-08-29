import React from "react";
import { Typography } from "@material-ui/core";
import useStyle from "../styling/styling";
import HContainer from "./HContainer"
import Typist from 'react-typist';
import HBlob from './HBlob'


function Intro() {
    const classes = useStyle();
    
    return (
        <HContainer>
            <Typist startDelay={500} avgTypingDelay={30} cursor={{show: false}}>
                <Typography variant="h2">
                    hello <p className={classes.friend}>world</p>,
                    <br/>
                    i'm <p className={classes.hai}>hai</p>.
                </Typography>
                <br/><br/>
                <Typography variant="h4">
                    i like to build systems and solve problems
                </Typography>
            </Typist>
            <HBlob/>
        </HContainer>
        
    );
}

export default Intro;
