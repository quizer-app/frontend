import axios from "axios";

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
