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

class Projects extends Component {
  render() {
    return (
      <Container
        className="container-projects"
        maxWidth="xl"
        id="projectsSection"
      >
        <Fade big cascade duration={2000} triggerOnce={true}>
          <Container className="container-inner" maxWidth="md">
            <h2>Projects</h2>
            <br />
            <div className={"project-cards"}>
              <MediaCard />
              <MediaCard />
              <MediaCard />
            </div>
            <br />
            <ScrollButton to="constructionSection" />
          </Container>
        </Fade>
      </Container>
    );
  }
}

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    margin: "5px"
  },
  media: {
    height: 140
  }
});

function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Code
        </Button>
        <Button size="small" color="primary">
          Website
        </Button>
      </CardActions>
    </Card>
  );
}

export default connect(null, null)(Projects);
