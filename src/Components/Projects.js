import React, { Component } from "react";
import { Container } from "@material-ui/core";
import ScrollButton from "./ScrollButton.js";

import { connect } from "react-redux";
import { Fade } from "react-awesome-reveal";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import "../Styles/Components/Projects/Projects.css";

import imgPortfolioV1 from "../Utils/portfolioV1.png";
import imgPortfolioV2 from "../Utils/portfolioV2.png";
import imgSourceAcad from "../Utils/sourceAcademy.png";
import imgJokes from "../Utils/jokes.png";
import imgMusicMaster from "../Utils/musicMaster.png";
import imgCirbd from "../Utils/cirbd.png";

class Projects extends Component {
  render() {
    return (
      <Container
        className="container-projects"
        maxWidth="xl"
        id="projectsSection"
      >
        <Fade big cascade duration={3000} triggerOnce={true} fraction={0.05}>
          <Container className="container-inner" maxWidth="md">
            <h2>Projects</h2>
            <br /> <br />
            <div className={"project-cards"}>
              <MediaCard
                name={"Portfolio Version 2.0"}
                text={
                  "Hello I'm Hai, this is the website you're on right now! Do you like it?"
                }
                website={"/"}
                img={imgPortfolioV2}
              />
              <MediaCard
                name={"Ship Map"}
                text={
                  "Ship route visualisation and tracking website on internship in China."
                }
                website={"http://ship.cirbd.cn/"}
                img={imgCirbd}
              />
              <MediaCard
                name={"Portfolio Version 1.0"}
                text={
                  "Portfolio using React and React libraries, created following a tutorial on Skillshare."
                }
                website={"http://hello-im-hai.herokuapp.com/"}
                img={imgPortfolioV1}
              />
              <MediaCard
                name={"Source Academy"}
                text={
                  "Contributed to Front-End testing for the Source Academy website."
                }
                website={"https://sourceacademy.nus.edu.sg/login"}
                img={imgSourceAcad}
              />
              <MediaCard
                name={"Music Master"}
                text={
                  "Simple Spotify artist search website, created following a tutorial on Skillshare."
                }
                website={"http://hello-im-hai.herokuapp.com/music-master"}
                img={imgMusicMaster}
              />
              <MediaCard
                name={"Simple Joke Query"}
                text={
                  "Simple joke query website, created following a tutorial on Skillshare."
                }
                website={"http://hello-im-hai.herokuapp.com/jokes"}
                img={imgJokes}
              />
            </div>
            <br /> <br />
            <ScrollButton to="contactSection" />
          </Container>
        </Fade>
      </Container>
    );
  }
}

const useStyles = makeStyles({
  card: {
    width: 294,
    margin: "5px",
    // padding: "3px",
    border: "3px solid white"
  },
  media: {
    height: 140
  }
});

function MediaCard({ name, text, website, img }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea href={website} target="_blank">
        <CardMedia className={classes.media} image={img} title={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Code
        </Button>
        <Button size="small" color="primary" href={website} target="_blank">
          Website
        </Button>
      </CardActions>
    </Card>
  );
}

export default connect(null, null)(Projects);
