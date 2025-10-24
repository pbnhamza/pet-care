import React from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ childern }) => {
  return <AuthContext></AuthContext>;
};

export default AuthProvider;
