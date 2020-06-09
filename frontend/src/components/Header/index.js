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
import LogoutButton from "../LogoutButton/index";

export default function Header() {
  const { isAuth, setAuth, setUser } = useContext(AuthContext);
  const history = useHistory();
  const [isMenuClicked, setClick] = useState(false);

  async function handleClick() {
    // Logs out the user
    try {
      const response = await axios.get("http://localhost:5000/auth/logout");
      let { isAuthenticated, userInfo } = response.data;
      await setAuth(isAuthenticated);
      await setUser(userInfo);
      // Sends user to login page and reloads the page
      await history.push("/login");
    } catch (err) {
      throw new Error(err);
    }
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
          <LogoutButton handleClick={handleClick} hideNav={hideNav} />
        ) : (
          <NavLink to="/login" onClick={hideNav}>
            Login
          </NavLink>
        )}
        {isAuth ? (
          <span></span>
        ) : (
          <NavLink to="/signin" onClick={hideNav}>
            Signin
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
