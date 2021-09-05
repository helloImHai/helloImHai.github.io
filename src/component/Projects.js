import React, { useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import HContainer from "./HContainer"
import useStyle from "../styling/styling";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

import "../Styles/Components/Projects/Projects.css";

import imgPortfolioV1 from "../Utils/portfolioV1.png";
import imgPortfolioV2 from "../Utils/portfolioV2.png";
import imgSourceAcad from "../Utils/sourceAcademy.png";
import imgJokes from "../Utils/jokes.png";
import imgMusicMaster from "../Utils/musicMaster.png";
import imgCirbd from "../Utils/cirbd.png";
import imgAMA from "../Utils/ama.png";
import imgFFF from "../Utils/four-five-foe.png";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const projects = [
    {
        pName: "Four Five Foe",
        pDesc: "Multiplayer tic-tac-toe variant that I played when I was a kid.",
    },
    {
        pName: "Ask Hai Anything",
        pDesc: "A single user Ask Me Anything website! Click to find out more about me.",
    },
    {
        pName: "Demon Slayer Peggle",
        pDesc: "IOS arcade game with in-house physics and game engines.",
    },
    {
        pName: "Sweechat",
        pDesc: "End-to-end encrypted IOS messaging app that caters to educational institutions.",
    }
]

function Projects(props) {
    const [jobIndex, setJobIndex] = useState(3)
    const {pName, jobTitle, pDesc} = projects[jobIndex]
    const classes = useStyle()
    return (
        <HContainer id="projects">
            <Box marginY="30px">
                <Typography variant="h4">
                    featured projects
                </Typography>
            </Box>
            <Grid container>
                <Grid item xs={12} sm={6} md={4}>
                    <MediaCard
                        name={"Four Five Foe"}
                        text={
                            "Multiplayer tic-tac-toe variant that I played when I was a kid."
                        }
                        website={"https://helloimhai.github.io/four-five-foe/"}
                        code={"https://github.com/helloImHai/four-five-foe/"}
                        img={imgFFF}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <MediaCard
                        name={"Four Five Foe"}
                        text={
                            "Multiplayer tic-tac-toe variant that I played when I was a kid."
                        }
                        website={"https://helloimhai.github.io/four-five-foe/"}
                        code={"https://github.com/helloImHai/four-five-foe/"}
                        img={imgFFF}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <MediaCard
                        name={"Four Five Foe"}
                        text={
                            "Multiplayer tic-tac-toe variant that I played when I was a kid."
                        }
                        website={"https://helloimhai.github.io/four-five-foe/"}
                        code={"https://github.com/helloImHai/four-five-foe/"}
                        img={imgFFF}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <MediaCard
                        name={"Four Five Foe"}
                        text={
                            "Multiplayer tic-tac-toe variant that I played when I was a kid."
                        }
                        website={"https://helloimhai.github.io/four-five-foe/"}
                        code={"https://github.com/helloImHai/four-five-foe/"}
                        img={imgFFF}
                    />
                </Grid>
            </Grid>
            <Box m={10}> <p> </p></Box>
        </HContainer>  
    );
}

const useStyles = makeStyles({
    card: {
      width: 294,
      margin: "10px",
      // padding: "3px",
      backgroundColor: "rgb(31, 32, 44)",
      border: "3px solid rgb(31, 32, 44)",
      textColor: "rgb(240, 240, 240)",
    },
    media: {
      height: 140,
      opacity: "80%",
    },
  });
  

function MediaCard({ name, text, website, img, code }) {
    const classes = useStyles();
  
    return (
      <Card className={classes.card}>
        <CardActionArea href={website} target="_blank">
          <CardMedia className={classes.media} image={img} title={name} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h5">
              {name}
            </Typography>
            <Typography variant="body2" style={{ color: "rgb(220, 220, 220)" }}>
              {text}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            style={{ color: "rgb(124, 217, 233)", paddingLeft: "10px" }}
            href={website}
            target="_blank"
          >
            Website
          </Button>
          {code ? (
            <Button
              size="small"
              style={
                code
                  ? { color: "rgb(124, 217, 233)" }
                  : { color: "rgb(31, 32, 44)" }
              }
              disabled={!code}
              href={code ? code : "/"}
              target={code ? "_blank" : null}
            >
              Code
            </Button>
          ) : (
            ""
          )}
        </CardActions>
      </Card>
    );
  }

export default Projects;
