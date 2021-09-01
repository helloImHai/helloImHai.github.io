import React, { useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import HContainer from "./HContainer"
import { makeStyles } from "@material-ui/core/styles";
import ExperienceTimeline from "./ExperienceTimeline";
import useStyle from "../styling/styling";

const jobs = [
    {
        jobName: "Ninja Van",
        jobTitle: "Backend Engineer Intern",
        jobDesc: "Transitioned the backend microservices in Ninja Van to communicate through asynchronous pub-sub. Implemented new notifications for shippers and consignees.",
    },
    {
        jobName: "National University of Singapore",
        jobTitle: "Teaching Assistant",
        jobDesc: "Led tutorials and labs to reinforce and consolidate new concepts discussed in lecture for various algorithm focused modules: Programming Methodology, Data Structure and Algorithms, and Design and Analysis of Algorithms.",
    },
    {
        jobName: "Shopee",
        jobTitle: "Payment Backend Engineer Intern",
        jobDesc: "Contributed to sharding of wallets database to support the high payment load during campaigns. Implemented core logic and handling of wallet transactions to support user and merchant payments",
    },
    {
        jobName: "AlphaLab Capital",
        jobTitle: "Software Engineer Intern",
        jobDesc: "Integrated new cryptocurrency exchanges to AlphaLab's high frequency trading architecture.",
    }
]

function Experience() {
    const [jobIndex, setJobIndex] = useState(3)
    const {jobName, jobTitle, jobDesc} = jobs[jobIndex]
    const classes = useStyle()
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
                        <Typography variant="h5" className={classes.hai}>
                            <b>{jobName}</b>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6">
                            {jobTitle}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={9}>
                    <Typography variant="h6" >
                        {jobDesc}
                    </Typography>
                </Grid>
            </Grid>
            <Box m={10}> <p> </p></Box>
        </HContainer>  
    );
}

export default Experience;
