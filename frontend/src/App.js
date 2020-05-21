import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

// Pages
import Home from "./pages/Home/index";
import Login from "./pages/Login/index";
import Signin from "./pages/Signin/index";
import User from "./pages/User/index";

// Context
import GifsProvider from "./store/GifsProvider";
import AuthProvider, { AuthContext } from "./store/AuthProvider";

import Header from "./components/Header/index";
// import Footer from './components/Footer/index';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuth } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth ? (
          <Component {...location} />
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
};

function App() {
  return (
    <GifsProvider>
      <AuthProvider>
        <Router>
          <div className="App">
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signin" component={Signin} />
            <PrivateRoute path="/user" component={User} />
            {/* <Footer /> */}
          </div>
        </Router>
      </AuthProvider>
    </GifsProvider>
  );
}

export default App;
