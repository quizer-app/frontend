import { useMutation } from "@tanstack/react-query";
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

apiPrivate.interceptors.response.use(
	(response) => response,
	async (error: AxiosError) => {
		if (error.config == undefined || error.response == undefined) {
			return Promise.reject(error);
		}
		const originalRequest = error.config;
		const statusCode = error.response.status;
		const refreshAccessTokenMutation = useMutation<AuthResponse>({
			mutationFn: async () => {
				const { data } = await apiPrivate.post<AuthResponse>("/auth/token");
				return data;
			},
			onSuccess: (data) => {
				apiPrivate.defaults.headers["Authorization"] = `Bearer ${data.token}`;
			},
			onError: (error) => {
				console.log(error);
			},
		});
		if (statusCode === 401) {
			refreshAccessTokenMutation.mutate();
			apiPrivate.request(originalRequest);
			return apiPrivate(originalRequest);
		}
		return Promise.reject(error);
	}
);

api.interceptors.response.use(
	(response) => response,
	(error: AxiosError) => {
		if (error.config == undefined || error.response == undefined) {
			return Promise.reject(error);
		}
	}
);
