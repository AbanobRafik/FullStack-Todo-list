import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "postgres://avnadmin:AVNS_xU1qnXEPc-ubajBx4-H@pg-3bd0de6-bobarafik0123-44a5.f.aivencloud.com:21939/defaultdb?sslmode=require",
  timeout: 5000,
});

export default axiosInstance;
