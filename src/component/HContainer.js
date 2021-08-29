import React from "react";
import { Container } from "@material-ui/core";
// import ScrollButton from "../Components/ScrollButton";
import useStyle from "../styling/styling";
import { Fade } from "react-awesome-reveal";

function HContainer(props) {
    const classes = useStyle();
    return (
        <Fade big duration={3000} triggerOnce={true}>
            <Container className={classes.bigContainer} maxWidth="md">
                {props.children}
            </Container>
        </Fade>
    );
}

export default HContainer;
