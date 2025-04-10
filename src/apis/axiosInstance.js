import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:6010/api",
  withCredentials: true, // 🔥 Ensures cookies (token) are sent with requests
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;
