import { useAtomValue } from "jotai";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { isAuthenticatedAtom } from "../../atoms/auth";

export default function RequireAuth() {
	const location = useLocation();

	const isAuthenticated = useAtomValue(isAuthenticatedAtom);

	return isAuthenticated ? (
		<Outlet />
	) : (
		<Navigate to="/signin" state={{ from: location }} replace />
	);
}
