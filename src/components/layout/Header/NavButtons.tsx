import { isAuthenticatedAtom, tokenDataAtom } from "@/atoms/auth";
import useLogout from "@/hooks/useLogout";
import { useAtomValue } from "jotai";
import { Link } from "react-router-dom";

export default function NavButtons() {
	const isAuthenticated = useAtomValue(isAuthenticatedAtom);
	const tokenData = useAtomValue(tokenDataAtom);

	const logout = useLogout();

	return (
		<div className="hidden sm:block font-bold">
			{isAuthenticated ? (
				<>
					<Link to="/dashboard" className="py-[0.8rem] px-6">
						Dashboard ({tokenData?.user.username})
					</Link>
					<button
						className="bg-blueButtonHover py-[0.8rem] px-8 rounded-md"
						onClick={logout}>
						Log Out
					</button>
				</>
			) : (
				<>
					<Link to="/signin" className="py-[0.8rem] px-6">
						Sign In
					</Link>
					<Link
						to="/signup"
						className="bg-blueButtonHover py-[0.8rem] px-8 rounded-md">
						Sign Up
					</Link>
				</>
			)}
		</div>
	);
}
