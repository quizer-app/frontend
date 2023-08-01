import { isAuthenticatedAtom } from "@/components/atoms/auth";
import { useAtomValue } from "jotai";
import { Link } from "react-router-dom";

export default function NavButtons() {
	const isAuthenticated = useAtomValue(isAuthenticatedAtom);
	return (
		<div className="hidden sm:block font-bold">
			{isAuthenticated ? (
				<Link to="/dashboard" className="py-[0.8rem] px-6">
					Dashboard
				</Link>
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
