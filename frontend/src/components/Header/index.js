import React, { useState, useContext } from "react";
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
  const [isMenuClicked, setClick] = useState(false);

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

  function toggleNav() {
    setClick(!isMenuClicked);
  }

  function hideNav() {
    setClick(false);
  }

  return (
    <SHeader>
      <SLogoContainer>
        <img src={GhostLogo} alt="Ghost Logo" />
        <NavLink to="/">Gabriska's Gif Searcher</NavLink>
      </SLogoContainer>
      <SNav isMenuClicked={isMenuClicked}>
        <NavLink to="/" onClick={hideNav}>
          Home
        </NavLink>
        {isAuth ? (
          <a
            onClick={() => {
              handleClick();
              hideNav();
            }}
          >
            Logout
          </a>
        ) : (
          <NavLink to="/login" onClick={hideNav}>
            Log in
          </NavLink>
        )}
        {isAuth ? (
          <span></span>
        ) : (
          <NavLink to="/signin" onClick={hideNav}>
            Sign in
          </NavLink>
        )}
        <NavLink to="/user" onClick={hideNav}>
          Saved gifs
        </NavLink>
      </SNav>
      <SBurgerMenu onClick={toggleNav}>
        <SBar isMenuClicked={isMenuClicked} />
        <SBar2 isMenuClicked={isMenuClicked} />
        <SBar3 isMenuClicked={isMenuClicked} />
      </SBurgerMenu>
    </SHeader>
  );
}
