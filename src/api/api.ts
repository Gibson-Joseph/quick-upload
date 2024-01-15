import axios, { AxiosError, AxiosResponse } from "axios";
import environment from "../config/environment";
import { toast } from "react-toastify";

const api = axios.create({
  baseURL: environment.baseURL,
});

api.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log("Axios request interseptor error", error);
  }
);

api.interceptors.response.use(
  // Handle the success response
  (response: AxiosResponse) => {
    const { data } = response;
    const token = data.access_token;
    if (token) {
      localStorage.setItem("access_token", token);
    }
    return data;
  },
  // Handle the error response
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      toast.error("Login failed!");
    }
    return Promise.reject(error);
  }
);

export default api;
