import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../store/AuthProvider";
import axios from "axios";

import { SHeader, SNav } from "./styles";

export default function Header() {
  const { isAuth } = useContext(AuthContext);
  const history = useHistory();

  async function handleClick() {
    // Logs out the user
    axios({
      method: "post",
      url: "http://localhost:5000/auth/logout",
    });
    // Sends user to login page and reloads the page
    await history.push("/login");
    await window.location.reload();
  }

  return (
    <SHeader>
      <div id="logo-container">
        <p>Gabriskas Gif Searcher</p>
      </div>
      <SNav>
        <NavLink to="/">Home</NavLink>
        {isAuth ? (
          <button onClick={handleClick}>Logout</button>
        ) : (
          <NavLink to="/login">Log in</NavLink>
        )}
        {isAuth ? <span></span> : <NavLink to="/signin">Sign in</NavLink>}
        <NavLink to="/user">Saved gifs</NavLink>
      </SNav>
    </SHeader>
  );
}
