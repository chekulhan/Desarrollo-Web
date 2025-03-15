// ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = false;  // Change this to your actual auth state

  return isAuthenticated ? element : <Navigate to="/" replace />;
};

export default ProtectedRoute;
