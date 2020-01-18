import React from 'react';
import '../Styles/App.css';
import Navbar from './Navbar.js';
import Intro from './Intro.js';
import About from './About.js';

function App() {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <About/>
    </div>
  );
}

export default App;
