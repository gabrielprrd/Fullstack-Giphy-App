// Provides the authorization status for the user's page globally
import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

// Checks if the user is authenticated
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [isAuth, setAuth] = useState(false);
  const [user, setUser] = useState({});

  // Brings the authentication status and user object to the provider
  // It re-renders everytime with the page so the saved gifs are properly updated
  useEffect(() => {
    const fetchFromServer = async () => {
      try {
        let response = await axios.get(
          "http://localhost:5000/auth/authenticate/"
        );
        let { isAuthenticated, user } = response.data;
        await setAuth(isAuthenticated);
        await setUser(user);
      } catch (err) {
        throw new Error(err);
      }
    };
    fetchFromServer();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, isAuth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
