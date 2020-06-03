import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";

// Styles
import { GlobalStyle, AppContainer } from "./assets/globalStyles/appStyles";

// Context
import GifsProvider from "./store/GifsProvider";
import AuthProvider from "./store/AuthProvider";

// Routes
import PrivateRoute from "./store/routes";

// Components
import Loading from "./components/Loading/index"; // lazy loading

// Pages
const Home = lazy(() => import("./pages/Home/index"));
const Login = lazy(() => import("./pages/Login/index"));
const Signin = lazy(() => import("./pages/Signin/index"));
const User = lazy(() => import("./pages/User/index"));

function App() {
  return (
    <GifsProvider>
      <AuthProvider>
        <Router>
          <GlobalStyle />
          <AppContainer>
            <Suspense fallback={<Loading />}>
              <Header />
              <Route path="/" exact component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signin" component={Signin} />
              <PrivateRoute path="/user" component={User} />
              <Footer />
            </Suspense>
          </AppContainer>
        </Router>
      </AuthProvider>
    </GifsProvider>
  );
}

export default App;
