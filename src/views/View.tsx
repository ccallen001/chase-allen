import { Switch, Route } from 'react-router-dom';

import Login from './Login/Login';
import Home from './Home/Home';
import About from './About/About';
import Games from './Games/Games';

import './View.scss';

function View() {
  return (
    <div className="view">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/games">
          <Games />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default View;
