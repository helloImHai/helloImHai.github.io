import React, { useState } from "react";
import { Button, Box, Grid, Typography } from "@material-ui/core";
import HContainer from "./HContainer"
import { makeStyles } from "@material-ui/core/styles";
import ExperienceTimeline from "./ExperienceTimeline";

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

const jobs = [

]

function Experience() {
    const [jobIndex, setJobIndex] = useState(3)
    return (
        <HContainer id="experience">
            <Box  m={3}>
                <Typography variant="h4">
                    work experience
                </Typography>
            </Box>
            <Grid container 
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
                spacing={2}>
                <Grid item xs={12}>
                    <ExperienceTimeline jobIndex={jobIndex} setJobIndex={setJobIndex}/>
                </Grid>
                <Grid container item xs={12} md={3} direction="column" justifyContent="flex-start">
                    <Grid item>
                        <Typography variant="h5" align="right">
                            <b>Shopee</b>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" align="right">
                            Software Engineering Intern
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={9}>
                    <Typography variant="p">
                        I'm a senior year <b>Computer Science</b> ASEAN scholar from the <b>National 
                        University of Singapore</b>. I enjoy building robust,
                        reliable, and scalable software engineering architectures.
                        <br/><br/>
                        I have experience working as a backend web engineer in large scale payments 
                        and trading platforms... I'm a quick learner and always open to tackle new challenges.
                    </Typography>
                </Grid>
            </Grid>
        </HContainer>  
    );
}

export default Experience;
