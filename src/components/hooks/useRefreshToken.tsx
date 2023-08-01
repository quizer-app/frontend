import { api } from "@/api/axios";

import { AuthResponse } from "@/api/response";
import { useSetAtom } from "jotai";
import { accessTokenAtom } from "../atoms/auth";

export default function useRefreshToken() {
	const setAccessToken = useSetAtom(accessTokenAtom);

	const refresh = async () => {
		const response = await api.post<AuthResponse>(
			"/auth/token",
			{},
			{
				withCredentials: true,
			}
		);
		const { accessToken } = response.data;
		setAccessToken(accessToken ?? null);
		return accessToken;
	};

	return refresh;
}
