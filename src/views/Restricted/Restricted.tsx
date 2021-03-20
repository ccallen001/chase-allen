import { useAuth } from '../../contexts/AuthContext';

function Restricted() {
  const { currentUser } = useAuth();

  return (
    <div className="view Restricted">
      <h3 className="view-title">Restricted</h3>
      {!currentUser ? (
        <p>You must be signed in to view this. 😡</p>
      ) : (
        <p>You are viewing a restricted view! 😃</p>
      )}
    </div>
  );
}

export default Restricted;
