import { createContext, useContext, useEffect, useState } from 'react';

import fb, { fbAuth } from '../firebase';

// @ts-ignore
const AuthContext = createContext();

export function useAuth(): any {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: any) {
  const [currentUser, setCurrentUser] = useState();

  function signUp(email: string, password: string) {
    return fbAuth.createUserWithEmailAndPassword(email, password);
  }

  useEffect(
    () => fbAuth.onAuthStateChanged((user: any) => setCurrentUser(user)),
    []
  );

  const value = {
    currentUser,
    signUp
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
