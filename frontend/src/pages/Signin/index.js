import React from "react";

export default function Signin() {
  // const inputEl = useRef(null);
  // Preciso criar um função baseado no .current do useRef para passar pro próximo elemento clicando enter
  return (
    <div className="page-container">
      <form id="signin-container" action="/auth/register" method="POST">
        <label for="signin-name">Name:</label>
        <input id="signin-name" name="name" type="text" />

        <label for="signin-email">Email:</label>
        <input id="signin-email" name="email" type="email" />

        <label for="signin-password">Password:</label>
        <input id="signin-password" name="password" type="password" />

        <input type="submit" value="Sign in" />
      </form>
    </div>
  );
}
