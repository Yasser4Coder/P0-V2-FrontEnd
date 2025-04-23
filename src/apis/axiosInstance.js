import axios from "axios";
// https://p0-api.onrender.com/api deployed version
// http://localhost:6010/api local version

const API = axios.create({
  baseURL: "https://89ad-105-235-136-158.ngrok-free.app/api/",
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
