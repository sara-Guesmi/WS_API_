import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Private = ({ isAuth }) => {
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default Private;
