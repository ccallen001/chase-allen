import { NavLink } from 'react-router-dom';

import './Nav.scss';

function Nav() {
  return (
    <nav className="component Nav">
      <NavLink to="/login" activeClassName="active-route" exact>
        Login
      </NavLink>
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
