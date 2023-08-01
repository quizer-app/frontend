import { api } from "@/api/axios";

import { useAtom } from "jotai";
import { accessTokenAtom } from "../atoms/auth";

export default function useRefreshToken() {
	const [, setAccessToken] = useAtom(accessTokenAtom);

	const refresh = async () => {
		const response = await api.post("/auth/token", {
			withCredentials: true,
		});
		const { accessToken } = response.data;
		setAccessToken(accessToken);
		return accessToken;
	};

	return refresh;
}
