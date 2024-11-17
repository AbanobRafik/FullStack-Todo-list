import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:1337/api",
  timeout: 3000,
});

export default axiosInstance;
