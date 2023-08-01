import { api } from "@/api/axios";
import {
	accessTokenAtom,
	isAuthenticatedAtom,
	tokenDataAtom,
} from "@/components/atoms/auth";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useAtomValue, useSetAtom } from "jotai";
import { Link } from "react-router-dom";

export default function NavButtons() {
	const isAuthenticated = useAtomValue(isAuthenticatedAtom);
	const setAccessToken = useSetAtom(accessTokenAtom);
	const tokenData = useAtomValue(tokenDataAtom);

	const logoutMutation = useMutation({
		mutationFn: () => {
			return api.delete("/auth/logout", { withCredentials: true });
		},
		onSuccess: () => {
			setAccessToken(null);
		},
		onError: (error: AxiosError) => {
			console.log(error.response?.data);
		},
	});

	return (
		<div className="hidden sm:block font-bold">
			{isAuthenticated ? (
				<>
					<Link to="/dashboard" className="py-[0.8rem] px-6">
						Dashboard ({tokenData?.user.username})
					</Link>
					<button
						className="bg-blueButtonHover py-[0.8rem] px-8 rounded-md"
						onClick={() => logoutMutation.mutate()}>
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
