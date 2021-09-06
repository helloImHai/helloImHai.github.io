import React, { useState } from "react";
import { Box, ButtonBase, Typography, IconButton } from "@material-ui/core";
import HContainer from "./HContainer"
import { ChevronLeftOutlined, ChevronRightOutlined } from '@material-ui/icons';

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import "../Styles/Components/Projects/Projects.css";
import imgAMA from "../Utils/ama.png";
import imgFFF from "../Utils/four-five-foe.png";


const projects = [
    {
        pName: "Four Five Foe",
        pDesc: "Real time online multiplayer game I built based on a tic-tac-toe variant I used to play when I was a kid.",
        website: "https://helloimhai.github.io/four-five-foe/",
        img: imgFFF,
        techStack: ['react', 'express', 'websockets']
    },
    {
        pName: "Ask Hai Anything",
        pDesc: "A single user Ask Me Anything website with working notifications! Ask me questions and find out more about me.",
        website: "https://helloimhai.github.io/tells-v2/",
        img: imgAMA,
        techStack: ['react', 'firebase', 'psql']
    },
    {
        pName: "Demon Slayer Peggle",
        pDesc: "IOS arcade game with in-house physics and game engines. Gameplay is based on Peggle, theme is based on Demon Slayer.",
        website: "https://helloimhai.github.io/four-five-foe/",
        img: imgAMA,
        techStack: ['swift']
    },
    {
        pName: "Sweechat",
        pDesc: "End-to-end encrypted IOS messaging app that caters to educational institutions built in 3 shorts sprints.",
        website: "https://helloimhai.github.io/four-five-foe/",
        img: imgAMA,
        techStack: ['swift', 'firebase', 'authentication']
    }
]

function Projects() {
    const [projectIndex, setProjectIndex] = useState(3)
    return (
        <HContainer id="projects">
            <Box marginY="30px">
                <Typography variant="h4">
                    featured projects
                </Typography>
            </Box>
            <Box display="flex" flexDirection="column" >
                <MediaCard
                    project={projects[projectIndex]}
                />
            </Box>
            <Box display="flex" justifyContent="center">
                <IconButton 
                    color="inherit" 
                    disabled={projectIndex == 0} 
                    onClick={() => setProjectIndex(p => p - 1)}> 
                    <ChevronLeftOutlined/> 
                </IconButton>
                {
                    projects.map((p, index) => (
                        <ButtonBase disableRipple onClick={() => setProjectIndex(index)}>
                            <Circle 
                                backgroundColor={projectIndex == index ? "red" : null}
                                radius={projectIndex == index ? 10 : 7}
                            />
                        </ButtonBase>
                    ))
                }
                <IconButton 
                    color="inherit" 
                    disabled={projectIndex == projects.length - 1} 
                    onClick={() => setProjectIndex(p => p + 1)}> 
                    <ChevronRightOutlined/> 
                </IconButton>
            </Box>
            <Box m={5}></Box>
        </HContainer>  
    );
}

const useStyles = makeStyles({
    card: {
      width: "100%",
      margin: "10px",
      backgroundColor: "rgb(31, 32, 44)",
      border: "10px solid rgb(31, 32, 44)",
      textColor: "rgb(240, 240, 240)",
    },
    media: {
      height: 350,
      opacity: "80%",
    },
  });
  

function MediaCard({project}) {
    const classes = useStyles();
    const { pName, pDesc, website, img, techStack } = project
    return (
      <Card className={classes.card}>
        <CardActionArea href={website} target="_blank">
          <CardMedia className={classes.media} image={img} title={pName} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h5">
              {pName}
            </Typography>
            <Typography style={{ color: "rgb(220, 220, 220)" }}>
              {pDesc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
            {
                techStack.map((tech, id) => (
                    <ButtonBase style={{marginLeft: "15px"}}>
                        <Typography>
                            {tech}
                        </Typography>
                    </ButtonBase>
                ))
            }
        </CardActions>
      </Card>
    );
}

function Circle(props) {
    var circleStyle = {
        margin:20,
        display:"inline-block",
        backgroundColor: props.backgroundColor || "white",
        borderRadius: "50%",
        width: props.radius || 7,
        height: props.radius || 7, 
      };
      return (
        <div style={circleStyle}/>
      );
}

export default Projects;
