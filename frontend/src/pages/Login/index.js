import React from 'react';

export default function Login() {
    // const inputEl = useRef(null);
    // Preciso criar um função baseado no .current do useRef para passar pro próximo elemento clicando enter
    // Pesquisar sobre Passport.js
    return (
        <div className="page-container">
            <form id="login-container" action="/auth/authenticate" method="POST">

                <label for="login-name">Email:</label>
                <input id="login-email" name="email" type="email" />

                <label for="login-password">Password:</label>
                <input id="login-password" name="password" type="password" />

                <input type="submit" value="Log in" />
                
            </form>
        </div>
    )
}
