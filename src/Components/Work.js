import React, { Component } from "react";
import { Container } from "@material-ui/core";
import profilePic from "../Utils/profile.png";
import ScrollButton from "./ScrollButton.js";

import { connect } from "react-redux";
import { Fade } from "react-awesome-reveal";

import "../Styles/Components/Work/Work.css";

class Work extends Component {
  render() {
    return (
      <Container className="container-work" maxWidth="xl" id="workSection">
        <Fade big cascade duration={2000} fraction={0.6} triggerOnce={true}>
          <Container className="container-inner" maxWidth="md">
            <h2>Work Experience</h2>
            <br />
            <Job
              name={"Consumer Insight Research (Chongqing, China)"}
              job={"Front-End Developer"}
              date={"Dec 19 -  Jan 20"}
              text={
                "Created a shipping route visualization website from scratch that was pitched to investors two weeks into incubation. Optimized and managed large pool of data to maintain a friendly and responsive user interface."
              }
            />
            <Job
              name={"National University of Singapore"}
              job={"CS1101S Teaching Assistant"}
              date={"Aug 19 -  Nov 19"}
              text={
                "Lead a tutorial class to reinforce and consolidate concepts discussed during lecture. Offer one-on-one consultations with students to build a supportive learning environment."
              }
            />
            <Job
              name={"Source Academy"}
              job={"Front-End Testing"}
              date={"May 19 -  Jul 19"}
              text={
                "Perform frontend testing on the Source Academy website that serves 600 staff and students per year. Add functional components to improve intuitive usability of the website using JS React framework."
              }
            />
            <Job
              name={"Math Vision and Private"}
              job={"Tutor"}
              date={"Jan 18 -  Nov 18"}
              text={
                "Tutor Secondary and Junior College students in Mathematics, Physics and Chemistry to prepare them for O level, A level and IB exams. Place emphasis on thorough understanding and joy of learning."
              }
            />
            <ScrollButton to="constructionSection" />
          </Container>
        </Fade>
      </Container>
    );
  }
}

const Job = ({ text, date, name, job }) => {
  return (
    <div className={"jobBox"}>
      <div className={"jobHeader"}>
        <h3>{name}</h3>
        <p>{date}</p>
      </div>
      <div className={"jobDesc"}>
        <p className={"jobName"}>{job}</p>
        <p className={"jobText"}>{text}</p>
      </div>
    </div>
  );
};

export default connect(null, null)(Work);
