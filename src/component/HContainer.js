import React from "react";
import { Container } from "@material-ui/core";
import { Fade } from "react-awesome-reveal";

function HContainer(props) {
    return (
        <Fade big duration={3000} triggerOnce={true}>
            <Container id={props.id} maxWidth="md">
                {props.children}
            </Container>
        </Fade>
    );
}

export default HContainer;
