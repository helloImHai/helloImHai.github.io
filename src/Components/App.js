import React from "react";
import { Provider } from "react-redux";
import store from "../store";
import "../Styles/App.css";
// import Navbar from "./Navbar.js";
import Intro from "./Intro.js";
import About from "./About.js";
import UnderConstruction from "./UnderConstruction.js";
import Skills from "./Skills.js";
import Work from "./Work.js";

function App() {
  return (
    <div>
      <Provider store={store}>
        {/* <Navbar /> */}
        <Intro />
        <About />
        <Skills />
        <Work />

        <UnderConstruction />
      </Provider>
    </div>
  );
}

export default App;
