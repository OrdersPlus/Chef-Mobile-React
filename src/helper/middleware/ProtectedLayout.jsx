import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ProtectedLayout = () => {
  const navigate = useNavigate();
  const [checkedAuth, setCheckedAuth] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const status = localStorage.getItem("status");

    const auth = token && status === "active";
    setIsAuthenticated(auth);
    setCheckedAuth(true);

    if (!auth) {
      localStorage.clear();
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  if (!checkedAuth) {
    // Optional: Add loading spinner here
    return null;
  }

  return isAuthenticated ? <Outlet /> : null;
};

export default ProtectedLayout;
