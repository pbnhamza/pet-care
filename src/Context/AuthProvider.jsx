import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../Firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUserWithEmailAndPasswordFunc = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateProfileFunc = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });
  };
  const signInWithEmailAndPasswordFunc = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signOutFunc = () => {
    return signOut(auth);
  };
  const authInfo = {
    user,
    setUser,
    createUserWithEmailAndPasswordFunc,
    signInWithEmailAndPasswordFunc,
    signOutFunc,
    updateProfileFunc,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
