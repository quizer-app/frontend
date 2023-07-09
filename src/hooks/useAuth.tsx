import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

export default function useAuth() {
	const context = useContext(AuthContext);
	return context;
}
