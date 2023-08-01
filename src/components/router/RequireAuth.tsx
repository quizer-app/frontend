import { useAtomValue } from "jotai";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { accessTokenAtom, isAuthenticatedAtom } from "../atoms/auth";

export default function RequireAuth() {
	const location = useLocation();

	const isAuthenticated = useAtomValue(isAuthenticatedAtom);
	const accessToken = useAtomValue(accessTokenAtom);
	console.log("RequireAuth", isAuthenticated, accessToken);

	return isAuthenticated ? (
		<Outlet />
	) : (
		<Navigate to="/signin" state={{ from: location }} replace />
	);
}
