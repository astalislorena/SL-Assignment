import axios, { RawAxiosRequestHeaders } from "axios";

export const headers: Partial<RawAxiosRequestHeaders> = {};

const token = import.meta.env.VITE_GITHUB_API_KEY;

if (token) {
  headers.Authorization = `Bearer ${token}`;
}

export const axiosClient = axios.create({
  baseURL: "https://api.github.com/",
  headers,
});
