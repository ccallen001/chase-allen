import { NavLink, Route } from 'react-router-dom';

import SpaceInvaders from './SpaceInvaders/SpaceInvaders';
import Trivia from './Trivia/Trivia';

import './Games.scss';

function Games() {
  return (
    <div className="view Games">
      <h3 className="view-title">Games</h3>
      <nav>
        <NavLink to="/games/space-invaders" exact>
          Space Invaders
        </NavLink>

        <NavLink to="/games/trivia" exact>
          Trivia
        </NavLink>
      </nav>

      <Route path="/games/space-invaders" exact>
        <SpaceInvaders />
      </Route>

      <Route path="/games/trivia" exact>
        <Trivia />
      </Route>
    </div>
  );
}

export default Games;
