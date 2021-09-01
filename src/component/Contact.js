import React from "react";
import { Box, Typography } from "@material-ui/core";
import HContainer from "./HContainer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({ 
    icon: { 
        fontSize: "40px",
        padding: "15px",
        color: "white",
        "&:hover": {
            color: "#cba8fe"
        }
    },
});


export default function Contact() {
    const classes = useStyle()
    return (
        <HContainer>
            <Box  m={3}>
                <Typography variant="h4" id="contact">
                    contact me
                </Typography>
            </Box>
            <Box display="flex" flexDirection="row" justifyContent="center">
                <a className={classes.icon}
                href={"https://www.facebook.com/profile.php?id=100033460157841"}
                target={"_blank"}
                >
                <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a className={classes.icon} href={"https://github.com/helloImHai"} target={"_blank"}>
                <FontAwesomeIcon icon={faGithub} />
                </a>
                <a className={classes.icon} href={"mailto:1503.hai.nguyen@gmail.com"} target={"_blank"}>
                <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a
                className={classes.icon}
                href={"https://www.instagram.com/hainguyen__/"}
                target={"_blank"}
                >
                <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                className={classes.icon}
                href={"https://www.linkedin.com/in/helloimhai/"}
                target={"_blank"}
                >
                <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </Box>
        </HContainer>
    );
}
