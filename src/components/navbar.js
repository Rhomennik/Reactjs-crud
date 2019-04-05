
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


// Components
import Criar from "./criar";
import Editar from "./editar";
import Listar from "./listar";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand"  target="_blank">
            <img src='https://avatars2.githubusercontent.com/u/24496303?s=460&v=4' width="30" height="30" alt="CodingTheSmartWay.com" />
          </a>
          <Link to="/" className="navbar-brand">App Crud</Link>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Listar</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Nova mensagens</Link>
              </li>
            </ul>
          </div>
        </nav>
        <br/>
        <Route path="/" exact component={Listar} />
        <Route path="/edit/:id" component={Editar} />
        <Route path="/create" component={Criar} />
      </div> );
    }
}
 
export default Navbar;