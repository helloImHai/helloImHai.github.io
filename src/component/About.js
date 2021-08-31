import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import profilePic from "../Utils/profile.png";
import HContainer from "./HContainer"
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({ 
    profilePic: { 
        margin: "20px",
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
            <Box  m={3}>
                <Typography variant="h4">
                    about me
                </Typography>
            </Box>
            <Grid container 
                direction="row"
                alignItems="center"
                spacing={2}>
                <Grid item xs={12} md={4}>
                    <img className={classes.profilePic} src={profilePic} alt="profile-pic" />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Typography variant="h6">
                        I'm a senior year <b>Computer Science</b> ASEAN scholar from the <b>National 
                        University of Singapore</b>. I enjoy building robust,
                        reliable, and scalable software engineering architectures.
                        <br/><br/>
                        I have experience working as a backend web engineer in large scale payments 
                        and trading platforms... I'm a quick learner and always open to tackle new challenges.
                    </Typography>
                </Grid>
            </Grid>
            <Box m={10}/>
        </HContainer>  
    );
}

export default About;
