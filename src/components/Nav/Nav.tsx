import { NavLink } from 'react-router-dom';

import './Nav.scss';

function Nav() {
  return (
    <nav className="component Nav">
      <NavLink to="/sign-in" activeClassName="active-route" exact>
        Sign In
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
      <NavLink to="/restricted" activeClassName="active-route" exact>
        Restricted
      </NavLink>
    </nav>
  );
}

export default Nav;
