import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/mensagem/navbar'

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