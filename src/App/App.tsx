import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from '../views/Home/Home';
import About from '../views/About/About';

import chaseAllen from '../assets/images/chase.jpeg';

import './App.scss';

function App() {
  return (
    <Router>
      <div className="App" data-testid="App">
        <header className="App-header">
          <img src={chaseAllen} alt="Chase Allen" />
          <span className="App-header-text">Chase Allen</span>
        </header>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
