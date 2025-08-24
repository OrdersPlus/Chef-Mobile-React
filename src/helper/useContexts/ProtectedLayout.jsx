// components/ProtectedLayout.js
import { Navigate, Outlet } from "react-router-dom";

const ProtectedLayout = () => {
  const token = localStorage.getItem("token");
  const status = localStorage.getItem("status");

  const isAuthenticated = token && status === "active";

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedLayout;