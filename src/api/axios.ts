import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL as string;

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
