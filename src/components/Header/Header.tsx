import { useHistory, useLocation } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';

import './Header.scss';

type ButtonProps = {
  text: string;
  onClick: () => void;
}

function Button(props: ButtonProps) {
  return (
    <button className="sign-in-out" onClick={props.onClick}>
      {props.text}
    </button>
  );
}

function Header() {
  const history = useHistory();
  const location = useLocation();

  const { userIsLoading, currentUser, signOut } = useAuth();

  return (
    <header className="Header">
      <h1 className="Header-text">Chase Allen</h1>
      {!userIsLoading && (
        <div className="sign-in-out-container">
          {!currentUser ? (
            <>
              {location.pathname !== '/sign-in' && (
                <Button
                  text="Sign In"
                  onClick={() => {
                    history.push('/sign-in');
                  }}
                />
              )}
            </>
          ) : (
            <Button
              text="Sign Out"
              onClick={async () => {
                await signOut();
              }}
            />
          )}
        </div>
      )}
    </header>
  );
}

export default Header;
