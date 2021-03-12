import { NavLink, Route } from 'react-router-dom';

import SpaceInvaders from './SpaceInvaders/SpaceInvaders';

// import './Games.scss';

function Games() {
  return (
    <div className="view Games">
      <h3 className="view-title">Games</h3>
      <NavLink to="/games/space-invaders" exact>
        Space Invaders
      </NavLink>

      <Route path="/games/space-invaders" exact>
        <SpaceInvaders />
      </Route>
    </div>
  );
}

export default Games;