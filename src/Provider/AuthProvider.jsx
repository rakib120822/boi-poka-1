import React, { useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

const auth = getAuth(app);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };

  const updateInfo = ( displayName, photoURL) => {
    return updateProfile(auth.currentUser, {
      photoURL,
      displayName,
    });
  };


  const resetPassword = (email)=>{
    return sendPasswordResetEmail(auth,email);
  }

  const authInfo = {
    signUp,
    signIn,
    logOut,
    user,
    setUser,
    updateInfo,
    loading,
    setLoading,
    resetPassword,
  };

  useEffect(() => {
    setUser(true);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return <AuthContext value={authInfo}>{children}</AuthContext>;
}

export default AuthProvider;
