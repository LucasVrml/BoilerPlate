import { Navigate, Outlet } from "react-router";
import { useAuth } from "../auth/auth";

export function ExcludedRoutesIfLogged() {
  const { user, loading } = useAuth();

  if (loading) {
    return null;
  }

  if (user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
