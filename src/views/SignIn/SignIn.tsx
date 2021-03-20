import { useRef, RefObject, useState } from 'react';

import { useAuth } from '../../contexts/AuthContext';

import './SignIn.scss';

function SignIn() {
  const emailRef: RefObject<any> = useRef();
  const passwordRef: RefObject<any> = useRef();
  const confirmPasswordRef: RefObject<any> = useRef();

  const { currentUser, userIsLoading, signIn, signUp } = useAuth();

  const [isSignIn, setIsSignIn] = useState(true);
  const [error, setError] = useState('');

  function resetFields() {
    [emailRef, passwordRef, confirmPasswordRef].forEach((field) => {
      if (field.current) field.current.value = '';
    });
  }

  async function handleSignIn() {
    try {
      setError('');

      await signIn(emailRef.current.value, passwordRef.current.value);

      resetFields();
    } catch (err) {
      setError(err.message);
      console.error(err);
    }
  }

  async function handleSignUp() {
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError('Passwords do not match');
    }

    try {
      setError('');

      await signUp(emailRef.current.value, passwordRef.current.value);

      resetFields();
    } catch (err) {
      setError(err.message);
      console.error(err);
    }
  }

  return (
    <div className="view SignIn">
      <h3 className="view-title">
        {!currentUser ? 'Sign In' : 'Signed In As:'}
      </h3>
      <h5 className="current-user-email">{currentUser?.email}</h5>
      <form>
        {error && (
          <div style={{ color: 'red', marginBottom: '8px' }}>{error}</div>
        )}
        <label>
          <h5>Email</h5>
          <input ref={emailRef} type="email" required />
        </label>
        <label>
          <h5>Password</h5>
          <input ref={passwordRef} type="password" required />
        </label>
        {!isSignIn && (
          <label>
            <h5>Confirm Password</h5>
            <input ref={confirmPasswordRef} type="password" required />
          </label>
        )}
        <button
          className="form-action"
          type="button"
          onClick={isSignIn ? handleSignIn : handleSignUp}
        >
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </button>
      </form>
      <button
        className="switch"
        onClick={() => setIsSignIn(!isSignIn)}
        disabled={userIsLoading}
      >
        {!isSignIn
          ? 'Click here to Sign In.'
          : "Don't have account? Click here to Sign Up."}
      </button>
    </div>
  );
}

export default SignIn;
