import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div id="logo-container">
        <p>Gabriskas Gif Searcher</p>
      </div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Log in</NavLink>
        <NavLink to="/signin">Sign in</NavLink>
        {/* For this we probably will need a hook userParams */}
        {/* <NavLink to="/user">Saved gifs</NavLink> */}
      </nav>
    </header>
  );
}
