import axios from "axios";
import { storageGet } from "./secureStorage";
import { BASE_URL } from "../theme/constants";

const axiosInstance = axios.create({
  baseURL: `${BASE_URL}/api`,
  headers: {
    Authorization: "",
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await storageGet("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
