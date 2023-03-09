import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function PrivateRoutes() {
  let isAuthenticated = !!localStorage.getItem("user") || !!sessionStorage.getItem("user");
  console.log(isAuthenticated)
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoutes;
