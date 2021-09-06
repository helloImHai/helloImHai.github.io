import React from "react";
import { Box, Container } from "@material-ui/core";
import { Fade } from "react-awesome-reveal";

function HContainer(props) {
    return (
        <Fade big duration={3000} triggerOnce={true}>
            <Container id={props.id} maxWidth="md" style={props.style}>
                <Box display="flex" flexDirection="column" justifyContent="center">
                    {props.children}
                </Box>
            </Container>
        </Fade>
    );
}

export default HContainer;
