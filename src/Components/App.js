import React from 'react';
import '../Styles/App.css';
import { Container, Paper, Breadcrumbs, Link, Typography } from '@material-ui/core';
import profilePic from "../Utils/profile.png";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //       Hello Everybody!
    //   </header>
    // </div>
    <div>
      <Breadcrumbs aria-label="breadcrumb" className="nav-bar">
        <Link color="inherit" href="/">
          Material-UI
          </Link>
        <Link color="inherit" href="/getting-started/installation/">
          Core
          </Link>
        <Typography color="inherit">Breadcrumb</Typography>
      </Breadcrumbs>
      <Container className="container-1" maxWidth="xl">
        <h1 className="greeting">HELLO <strong className="friend-name">FRIEND</strong>,
        I'M <strong className="my-name">HAI</strong>!</h1>
        {/* <p>
          I am a year 2 Computer Science student at the National University of Singapore
        </p> */}
      </Container>
      <Container className="container-2" maxWidth="xl">
        <img className="profile-pic" src={profilePic} alt="profile-pic" />
      </Container>
      {/* <img className="profile-pic" src={profilePic} alt="profile-pic"/> */}
    </div>
  );
}

export default App;
