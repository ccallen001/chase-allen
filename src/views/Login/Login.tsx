import { useRef, RefObject, useState } from 'react';

import { useAuth } from '../../contexts/AuthContext';

import './Login.scss';

function Login() {
  const emailRef: RefObject<any> = useRef();
  const passwordRef: RefObject<any> = useRef();
  const confirmPasswordRef: RefObject<any> = useRef();
  const { currentUser, signUp } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const [isSignup, setIsSignup] = useState(true);

  async function handleLogin() {}

  async function handleSignup() {
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setIsLoading(true);

      signUp(emailRef.current.value, passwordRef.current.value);
    } catch (err) {
      setError('Failed to sign up');
      console.error(err);
    }

    setIsLoading(false);
  }

  return (
      <div className="view Login">
        <h3 className="view-title">Login</h3>
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
          {isSignup && (
            <label>
              <h5>Confirm Password</h5>
              <input ref={confirmPasswordRef} type="password" required />
            </label>
          )}
          <button
            className="form-action"
            type="button"
            onClick={isSignup ? handleSignup : handleLogin}
          >
            {isSignup ? 'Sign Up' : 'Log In'}
          </button>
          {JSON.stringify(currentUser)}
        </form>
        <button
          className="switch"
          onClick={() => setIsSignup(!isSignup)}
          disabled={isLoading}
        >
          {isSignup
            ? 'Click here to Log In.'
            : 'Need an account? Click here to Sign Up.'}
        </button>
      </div>
  );
}

export default Login;
