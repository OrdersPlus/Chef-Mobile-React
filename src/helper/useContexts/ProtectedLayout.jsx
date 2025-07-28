// components/ProtectedLayout.js
import { Navigate, Outlet } from "react-router-dom";

const ProtectedLayout = () => {
  const token = localStorage.getItem("token");
  const message = localStorage.getItem("message");

  const isAuthenticated = token && message === "verified";

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedLayout;
