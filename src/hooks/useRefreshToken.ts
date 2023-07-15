import axios from "../api/axios";
import useAuth from "./useAuth";

interface TokenResponse {
	message: string;
	access_token: string;
}

export default function useRefreshToken() {
	const { setAuth } = useAuth();

	const refresh = async () => {
		const response = await axios.post<TokenResponse>("/auth/token", {
			withCredentials: true,
		});
		setAuth((prev: TokenResponse) => {
			// console.log(JSON.stringify(prev));
			// console.log(JSON.stringify(response.data));
			return { ...prev, access_token: response.data.access_token };
		});
		return response.data;
	};

	return refresh;
}
