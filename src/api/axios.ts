import axios from "axios";

// const baseURL = "http://localhost:3000/api/v1/";
const baseURL = "https://api.local.elotoja.com/api/v1/";

export default axios.create({
	baseURL,
});
export const axiosPrivate = axios.create({
	baseURL,
	withCredentials: true,
});
