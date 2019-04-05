import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateTodo from "./components/criar";
import EditTodo from "./components/editar";
import TodosList from "./components/listar";
class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">
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
        <Route path="/" exact component={TodosList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </div>
      </Router>
    );
  }
}

export default App;