import { useAuth } from '../../contexts/AuthContext';

function Restricted() {
  const { userIsLoading, currentUser } = useAuth();

  return !userIsLoading ? (
    <div className="view Restricted">
      <h3 className="view-title">Restricted</h3>
      {!currentUser ? (
        <p>You must be signed in to view this. 😡</p>
      ) : (
        <p>You are viewing a restricted view! 😃</p>
      )}
    </div>
  ) : null;
}

export default Restricted;
