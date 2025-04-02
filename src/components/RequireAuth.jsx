import { useEffect, useState } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import API from "../apis/axiosInstance";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
  const { auth, setAuth } = useAuth();
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    API.get("/auth/auth-check")
      .then(() => setIsAuthenticated(true))
      .catch(() => setIsAuthenticated(false));
  }, [setAuth]);

  if (isAuthenticated === null) return null; // ✅ Prevents rendering anything until auth check completes

  return isAuthenticated && allowedRoles.includes(auth?.role?.role) ? (
    <Outlet />
  ) : isAuthenticated ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
