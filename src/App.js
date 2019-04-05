import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from './components/navbar'

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar/>
      </Router>
    );
  }
}

export default App;