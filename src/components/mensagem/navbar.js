
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Criar from "./criar";
import Editar from "./editar";
import Listar from "./listar";
import Apuestas from "../apostala/apuestas";

class Navbar extends Component {
    render() { 
        return ( <div className="container">
        <nav  className="navbar navbar-expand-lg navbar-light bg-light" >
          <a className="navbar-brand"  target="_blank">
            <img src='https://avatars2.githubusercontent.com/u/24496303?s=460&v=4' width="30" height="30"/>
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
              <li className="navbar-item">
                <Link to="/apuestas" className="nav-link">Apuestas</Link>
              </li>
            </ul>
          </div>
        </nav>
        <br/>
        <Route path="/" exact component={Listar} />
        <Route path="/edit/:id" component={Editar} />
        <Route path="/create" component={Criar} />
        <Route path="/apuestas" component={Apuestas} />
      </div> );
    }
}
 
export default Navbar;