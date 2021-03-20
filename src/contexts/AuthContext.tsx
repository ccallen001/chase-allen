import { createContext, useContext, useEffect, useState } from 'react';

import { fbAuth } from '../firebase';

// @ts-ignore
const AuthContext = createContext();

export function useAuth(): any {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: any) {
  const [userIsLoading, setUserIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  function signIn(email: string, password: string) {
    return fbAuth.signInWithEmailAndPassword(email, password);
  }

  function signUp(email: string, password: string) {
    return fbAuth.createUserWithEmailAndPassword(email, password);
  }

  function signOut() {
    return fbAuth.signOut();
  }

  useEffect(
    () =>
      fbAuth.onAuthStateChanged((user: any) => {
        setCurrentUser(user);
        setUserIsLoading(false);
      }),
    []
  );

  const value = {
    currentUser,
    userIsLoading,
    signIn,
    signUp,
    signOut
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
