import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/NavBar';
import About from './components/About';

class App extends Component{
  render (){
    return(
      <Router>
        <div>
          <About />
          <Navbar />
        </div>
 
      </Router>
    )
  }
}

export default App;
