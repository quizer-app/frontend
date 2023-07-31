import { getAccessToken, setAccessToken } from "@/utils/accessToken";
import axios, { AxiosError } from "axios";
import { AuthResponse } from "./response";

const baseURL = "http://localhost:3000/api/v1/";
// const baseURL = "https://api.local.elotoja.com/api/v1/";

export const api = axios.create({
	baseURL,
	headers: {
		"Content-Type": "application/json",
	},
});
export const apiPrivate = axios.create({
	baseURL,
	withCredentials: true,
	headers: {
		"Content-Type": "application/json",
	},
});

apiPrivate.interceptors.request.use((config) => {
	const accessToken = getAccessToken();
	console.log("accessToken", accessToken);

	if (accessToken) {
		config.headers["Authorization"] = `Bearer ${accessToken}`;
	}
	return config;
});

apiPrivate.interceptors.response.use(
	(response) => response,
	async (error: AxiosError) => {
		if (!error.config || !error.response) {
			return Promise.reject(error);
		}
		const originalRequest = error.config;
		const statusCode = error.response.status;

		if (statusCode === 401 && !originalRequest._retry) {
			originalRequest._retry = true;

			const refreshTokenRequest = await apiPrivate.post<AuthResponse>(
				"/auth/token"
			);
			if (refreshTokenRequest.status === 200) {
				const { accessToken } = refreshTokenRequest.data;
				setAccessToken(accessToken ?? null);

				return apiPrivate(originalRequest);
			}
		}
		return Promise.reject(error);
	}
);
