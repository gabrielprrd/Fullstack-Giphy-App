// Provides the authorization status for the user's page globally
import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

// Checks if the user is authenticated
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [isAuth, setAuth] = useState(false);
  const [user, setUser] = useState({});

  // Brings the authentication status and user object to the provider
  useEffect(() => {
    const fetchFromServer = async () => {
      try {
        let response = await axios.get(
          "http://localhost:5000/auth/authenticate/"
        );
        let { isAuthenticated, userInfo } = response.data;
        await setUser(userInfo);
        await setAuth(isAuthenticated);
      } catch (err) {
        throw new Error(err);
      }
    };

    fetchFromServer();
  }, [isAuth]);

  return (
    <AuthContext.Provider value={{ user, isAuth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
