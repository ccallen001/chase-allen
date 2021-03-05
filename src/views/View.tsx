import { Switch, Route } from 'react-router-dom';

import Home from './Home/Home';
import About from './About/About';

import './View.scss';

function View() {
  return (
    <div className="view">
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default View;
