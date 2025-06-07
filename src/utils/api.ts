import axios from "axios";
import { API_URL } from "../config/config";

const api = axios.create({
  baseURL: API_URL,
});

//request
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (e) => {
    return Promise.reject(e);
  },
);

export default api;
