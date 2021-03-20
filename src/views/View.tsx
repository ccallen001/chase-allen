import { Switch, Route } from 'react-router-dom';

import SignIn from './SignIn/SignIn';
import Home from './Home/Home';
import About from './About/About';
import Games from './Games/Games';
import Restricted from './Restricted/Restricted';

import './View.scss';

function View() {
  return (
    <div className="view">
      <Switch>
        <Route path="/sign-in">
          <SignIn />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/games">
          <Games />
        </Route>

        <Route path="/restricted">
          <Restricted />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default View;
