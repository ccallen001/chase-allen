import chaseAllen from '../../assets/images/chase.jpeg';
import './Header.scss';

function Header() {
  return (
    <header className="Header">
        <img src={chaseAllen} alt="Chase Allen" />
        <span className="Header-text">Chase Allen</span>
      </header>
  );
}

export default Header;