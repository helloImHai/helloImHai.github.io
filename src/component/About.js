import React from "react";
import { Button, Box, Grid, Typography } from "@material-ui/core";
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
        <HContainer id="about">
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
                        systems and high fequency trading platforms. I'm a quick learner and I'm 
                        always open to tackle new challenges.
                    </Typography>
                </Grid>
                <Box m={2}/>
                <Grid container direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={3}>
                    <Grid container item xs={6} justifyContent="flex-end">
                        <Button variant="outlined" color="inherit" href="/resume.pdf" target="_blank">
                            Grab my resume
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="outlined" color="inherit" href="/transcript.pdf" target="_blank">
                            Peek my transcript
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Box m={10}/>
        </HContainer>  
    );
}

export default About;
