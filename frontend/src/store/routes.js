import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/Home/index";
import Login from "../pages/Login/index";
import Signin from "../pages/Signin/index";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  );
}
