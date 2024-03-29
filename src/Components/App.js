import React from "react";
import Intro from "../component/Introduction";
import About from "../component/About";
import Contact from "../component/Contact";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createTheme, responsiveFontSizes } from "@material-ui/core/styles";
import HNavbar from "../component/HNavbar";
import Experience from "../component/Experience";
import Projects from "../component/Projects";

const themeLight = createTheme({
  palette: {
    background: {
      default: "#e4f0e2"
    }
  }
});

const themeDark = responsiveFontSizes(createTheme({
    palette: {
        background: {
            default: "#222222"
        },
        text: {
            primary: "#ffffff"
        }
    },
    typography: {
        fontFamily: ['"Roboto Mono"', 'monospace'].join(','),
        strong: {
            color: "#2882F8",
        }
    }
}));

function App() {
  return (
    <div>
        <ThemeProvider theme={themeDark}>
            <CssBaseline />
            <HNavbar />
            <Intro />
            <About />
            <Experience />
            <Projects />
            <Contact />
        </ThemeProvider>
    </div>
  );
}

export default App;
