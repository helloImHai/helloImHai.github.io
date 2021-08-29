import React from "react";
import { Typography } from "@material-ui/core";
import profilePic from "../Utils/profile.png";
import HContainer from "./HContainer"
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({ 
    profilePic: { 
        marginTop: "20px",
        marginBottom: "20px",
        height: "200px",
        borderRadius: "100px",
        borderColor: "white",
        borderWidth: "2",
        boxShadow: "0px 0px 0px 5px rgba(255, 255, 255, 0.8)",
    }
});


function About() {
    const classes = useStyle();
    return (
        <HContainer id="about-section">
            <img className={classes.profilePic} src={profilePic} alt="profile-pic" />
            <Typography variant="h2">
                hello <p className={classes.friend}>friend</p>,
                <br/>
                i'm <p className={classes.hai}>hai</p>.
            </Typography>
            <br/><br/>
            <Typography variant="h4">
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.
            </Typography>
        </HContainer>
        // {/* <ScrollButton to="aboutSection" /> */}   
    );
}

export default About;
