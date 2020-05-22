// Provides the authorization status for the user's page globally
import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

// Checks if the user is authenticated
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [isAuth, setAuth] = useState(false);

  // Brings the authentication status to the provider
  useEffect(() => {
    const fetchFromServer = async () => {
      try {
        let response = await axios.get(
          "http://localhost:5000/auth/authenticate"
        );
        // let { isAuthenticated, frontUser} = response.data;
        await setAuth(response.data.isAuthenticated);
      } catch (err) {
        throw new Error(err);
      }
    };

    fetchFromServer();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
