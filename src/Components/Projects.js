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
import imgAMA from "../Utils/ama.png";
import imgFFF from "../Utils/four-five-foe.png";

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
                name={"Four Five Foe"}
                text={
                  "Multiplayer tic-tac-toe variant that I played when I was a kid."
                }
                website={"https://helloimhai.github.io/four-five-foe/"}
                code={"https://github.com/helloImHai/four-five-foe/"}
                img={imgFFF}
              />
              <MediaCard
                name={"Ask Hai Anything"}
                text={
                  "A single user Ask Me Anything website! Click to find out more about me."
                }
                website={"http://188.166.255.242/"}
                code={"https://github.com/helloImHai/tells"}
                img={imgAMA}
              />
              <MediaCard
                name={"Portfolio Version 2.0"}
                text={
                  "Hello I'm Hai, this is the website you're on right now! Do you like it?"
                }
                website={"/"}
                code={"https://github.com/helloImHai/helloImHai.github.io"}
                img={imgPortfolioV2}
              />
              <MediaCard
                name={"Ship Map"}
                text={
                  "Ship route visualisation and tracking website on internship in China."
                }
                website={"http://ship.cirbd.cn/"}
                code={null}
                img={imgCirbd}
              />
              <MediaCard
                name={"Portfolio Version 1.0"}
                text={
                  "Portfolio using React and React libraries, created following a tutorial on Skillshare."
                }
                website={"http://hello-im-hai.herokuapp.com/"}
                code={"https://github.com/helloImHai/portfolio"}
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
                code={"https://github.com/helloImHai/portfolio"}
                img={imgMusicMaster}
              />
              <MediaCard
                name={"Simple Joke Query"}
                text={
                  "Simple joke query website, created following a tutorial on Skillshare."
                }
                website={"http://hello-im-hai.herokuapp.com/jokes"}
                code={"https://github.com/helloImHai/portfolio"}
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

export default connect(null, null)(Projects);
