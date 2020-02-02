import React from "react";
import { Provider } from "react-redux";
import store from "../store";
import "../Styles/App.css";
import Intro from "./Intro.js";
import About from "./About.js";
import Skills from "./Skills.js";
import Work from "./Work.js";
import Projects from "./Projects.js";
import Contact from "./Contact.js";

function App() {
  return (
    <div>
      <Provider store={store}>
        {/* <Navbar /> */}
        <Intro />
        <About />
        <Skills />
        <Work />
        <Projects />
        <Contact />

        {/* <UnderConstruction /> */}
      </Provider>
    </div>
  );
}

export default App;
