import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';

class App extends Component{
  render (){
    return(
      <Router>
        <div>
          <Navbar />
          <About />
          <Projects />
        </div>
 
      </Router>
    )
  }
}

export default App;
