import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loader from "../Components/Loader/Loader";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) return <Loader></Loader>;
  if (!user) return <Navigate to={"/login"} state={{from:location}} replace></Navigate>;

  return children;
};

export default PrivetRoute;
