import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function RequireAuth() {
	const { auth } = useAuth();
	const location = useLocation();

	if (!auth?.token) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	}
	return <Outlet />;
}
