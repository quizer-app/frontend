import { Outlet, useLocation } from "react-router-dom";

export default function RequireAuth() {
	const location = useLocation();

	// if (!auth?.token) {
	// 	return <Navigate to="/login" state={{ from: location }} replace />;
	// }
	return <Outlet />;
}
