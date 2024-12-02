import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://delightful-morning-f3a21cbd39.strapiapp.com/api",
  timeout: 5000,
});

export default axiosInstance;
