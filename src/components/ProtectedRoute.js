import React from "react";
import { Navigate, Outlet } from "react-router-dom";
// Navigate,
export default function ProtectedRoute({
  isAllowed,
  redirectPath = "/login",
  children,
}) {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace={true} />;
  }
  return children ? children : <Outlet />;
  // return <Outlet />;
}
