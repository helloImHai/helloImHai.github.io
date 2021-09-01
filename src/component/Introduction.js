import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import useStyle from "../styling/styling";
import HContainer from "./HContainer"
import Typist from 'react-typist';
import HBlob from './HBlob'

function Intro() {
    const classes = useStyle();
    const [isDoneTyping, setIsDoneTyping] = useState(false)
    return (
        <HContainer >
            <div className={classes.bigContainer}>
                <Typist startDelay={500} avgTypingDelay={30} cursor={{show: false}} onTypingDone={() => setIsDoneTyping(true)}>
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
                <HBlob show={isDoneTyping ? "block" : "none"}/>
            </div>
        </HContainer>
        
    );
}

export default Intro;
