import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../store/AuthProvider";
import axios from "axios";

import {
  SHeader,
  SNav,
  SLogoContainer,
  SBurgerMenu,
  SBar,
  SBar2,
  SBar3,
} from "./styles";
import GhostLogo from "../../assets/images/ghost-logo.svg";

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

  function showNav() {
    
  }

  return (
    <SHeader>
      <SLogoContainer>
        <img src={GhostLogo} alt="Ghost Logo" />
        <p>Gabriskas Gif Searcher</p>
      </SLogoContainer>
      <SNav>
        <NavLink to="/">Home</NavLink>
        {isAuth ? (
          <a onClick={handleClick}>Logout</a>
        ) : (
          <NavLink to="/login">Log in</NavLink>
        )}
        {isAuth ? <span></span> : <NavLink to="/signin">Sign in</NavLink>}
        <NavLink to="/user">Saved gifs</NavLink>
      </SNav>
      <SBurgerMenu onClick={showNav}>
        <SBar />
        <SBar2 />
        <SBar3 />
      </SBurgerMenu>
    </SHeader>
  );
}
