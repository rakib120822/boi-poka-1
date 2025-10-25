import React, { Children, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";

function PrivateRouter({ children }) {
  const { user,loading } = useContext(AuthContext);
  const location = useLocation();

  if(loading){
    return <p>Loading .....</p>
  }

  if (!user) {
    return <Navigate to={"/auth/signin"} state={location.pathname} />;
  } else {
    return <>{children}</>;
  }
}

export default PrivateRouter;
