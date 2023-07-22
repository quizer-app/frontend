import { AxiosError } from "axios";
import { axiosPrivate } from "./axios";
import { AuthResponse } from "./response";

export const refreshAccessTokenFn = async () => {
	const response = await axiosPrivate.post<AuthResponse>("/auth/token");
	return response.data;
};

axiosPrivate.interceptors.response.use(
	(response) => {
		return response;
	},
	async (error: AxiosError) => {
		if (error.config == undefined || error.response == undefined)
			return Promise.reject(error);
		const originalRequest = error.config;
		const statusCode = error.response.status;
		if (statusCode === 401) {
			axiosPrivate.request(originalRequest);
			await refreshAccessTokenFn();
			return axiosPrivate(originalRequest);
		}
		return Promise.reject(error);
	}
);
