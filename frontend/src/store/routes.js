import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

import { AuthContext } from "./AuthProvider";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { isAuth, setAuth } = useContext(AuthContext);
  
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth ? (
          <Component {...location} />
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
}
