import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../store/AuthProvider';

export default function Header() {
  const { isAuth } = useContext(AuthContext);
  const history = useHistory();

  async function handleClick() {
    axios({
      method: 'post',
      url: 'http://localhost:5000/auth/logout',
    })
    await history.push("/login");
    await window.location.reload();
  }

  return (
    <header>
      <div id="logo-container">
        <p>Gabriskas Gif Searcher</p>
      </div>
      <nav>
        <NavLink to="/">Home</NavLink>
        {isAuth ? <button onClick={handleClick}>Logout</button> : <NavLink to="/login">Log in</NavLink>}
        <NavLink to="/signin">Sign in</NavLink>
        <NavLink to="/user">Saved gifs</NavLink>
      </nav>
    </header>
  );
}
