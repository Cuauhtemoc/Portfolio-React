import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/NavBar';
import Intro from './components/Intro';
import Projects from './components/Projects';
import About  from './components/About';

class App extends Component{
  render (){
    return(
      <Router>
        <div>
          <Navbar />
          <Intro />
          <About />
          <Projects />
        </div>
 
      </Router>
    )
  }
}

export default App;
