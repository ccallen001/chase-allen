import { NavLink } from 'react-router-dom';

import './Nav.scss';

function Nav() {
  return (
    <nav>
      <NavLink to="/" activeClassName="active-route" exact>
        Home
      </NavLink>
      <NavLink to="/about" activeClassName="active-route" exact>
        About
      </NavLink>
      <NavLink to="/games" activeClassName="active-route" exact>
        Games
      </NavLink>
    </nav>
  );
}

export default Nav;
