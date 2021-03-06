import React, { Component } from "react";
import { Container } from "@material-ui/core";
import ScrollButton from "./ScrollButton.js";

import { connect } from "react-redux";
import { Fade } from "react-awesome-reveal";

import "../Styles/Components/Work/Work.css";

class Work extends Component {
  render() {
    return (
      <Container
        className="container-work"
        maxWidth="xl"
        id="workSection"
        fraction={0.1}
      >
        <Fade big cascade duration={2000} triggerOnce={true}>
          <Container className="container-inner" maxWidth="md">
            <h2>Work Experience</h2>
            <br />
            <Job
              name={"National University of Singapore"}
              job={"Undergraduate Teaching Assistant"}
              date={"Aug 19 - Present"}
              text={
                "Support the teaching team in various modules: Data Structures & Algorithms (Aug 20) / Programming Methodology (Aug 19, Aug 20).\
                 Lead tutorials and labs to reinforce and consolidate new concepts. Offer one-on-one consultations to build a supportive learning environment."
              }
            />
            <Job
              name={"Ninja Van Logistics"}
              job={"Software Engineer Intern"}
              date={"May 20 -  Aug 20"}
              text={
                "Worked in an engineer team to transition the backend microservices in Ninja Van to communicate through asynchronous pub-sub. Implemented new notifications to shipper and consignee."
              }
            />
            <Job
              name={"Consumer Insight Research (Chongqing, China)"}
              job={"Front-End Developer"}
              date={"Dec 19 -  Jan 20"}
              text={
                "Created a shipping route visualization website from scratch that was pitched to investors two weeks into incubation. Optimized and managed large pool of data to maintain a friendly and responsive user interface."
              }
            />
            <Job
              name={"Source Academy"}
              job={"Front-End Testing"}
              date={"May 19 -  Jul 19"}
              text={
                "Performed frontend testing on the Source Academy website that serves 600 staff and students per year. Added functional components to improve intuitive usability of the website using JS React framework."
              }
            />
            <ScrollButton to="projectsSection" />
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
        <p className={"jobDate"}>{date}</p>
      </div>
      <div className={"jobDesc"}>
        <h3 className={"jobName"}>{job}</h3>
        <p className={"jobText"}>{text}</p>
      </div>
    </div>
  );
};

export default connect(null, null)(Work);
