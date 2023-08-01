import { isAuthenticated } from "@/utils/accessToken";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function RequireAuth() {
	const location = useLocation();

	if (!isAuthenticated()) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	}
	return <Outlet />;
}
