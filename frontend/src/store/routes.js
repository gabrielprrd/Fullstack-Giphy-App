// import React, { useContext } from "react";
// import { BrowserRouter as Router, Route, Redirect, useLocation } from "react-router-dom";

// // Pages
// import Home from "../pages/Home/index";
// import Login from "../pages/Login/index";
// import Signin from "../pages/Signin/index";
// import User from "../pages/User/index";

// // Context state
// import { AuthContext } from "../store/AuthProvider";

// const PrivateRoute = ({ element: User, ...rest }) => {
//   const { isAuth } = useContext(AuthContext);
// let location = useLocation();
//   <Route
//     {...rest}
//     render={({props, location}) =>
//       isAuth ? (
//         <User {...props} />
//       ) : (
//         <Redirect to={{ pathname: "/", state: { from: location } }} />
//         // <p>penis</p>
//       )
//     }
//   />;
// // };

// export default function MainRoutes() {
//   return (
//     <Router>
//       <Route path="/" exact component={Home} />
//       <Route path="/login" component={Login} />
//       <Route path="/signin" component={Signin} />
//       {/* <PrivateRoute path="/user" element={<User />} /> */}
//     </Router>
//   );
// }
