import { useState, useEffect } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import API from "../apis/axiosInstance";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
  const { auth, setAuth } = useAuth();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    API.get("/auth/auth-check")
      .then((response) => {
        setIsAuthenticated(true);
      })
      .catch(() => setIsAuthenticated(false))
      .finally(() => setLoading(false)); // ✅ Ensures state updates
  }, [setAuth]);

  if (loading) return <p>Loading...</p>; // ✅ Prevents premature redirect

  return isAuthenticated && allowedRoles.includes(auth?.role?.role) ? (
    <Outlet />
  ) : isAuthenticated ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
