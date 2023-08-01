import { Outlet } from "react-router-dom";

export default function RequireAuth() {
	// const location = useLocation();

	// if (false == 1) {
	// 	return <Navigate to="/login" state={{ from: location }} replace />;
	// }
	return <Outlet />;
}
