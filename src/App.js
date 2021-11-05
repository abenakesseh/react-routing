import React from 'react';
import './style.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

export default function App() {
  return (
    <Router>

    <h2>Clue Mediator </h2>
    
    <div className="App">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <NavLink className="navbar-brand" to="/">Clue Mediator </NavLink>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><NavLink className="link" exact activeClassName="active" to="/">Home</NavLink></li>
              <li><NavLink className="link" activeClassName="active" to="/about">About</NavLink></li>
              <li><NavLink className="link" activeClassName="active" to="/contact">Contact</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="jumbotron">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
    
    </Router>
  );
}
