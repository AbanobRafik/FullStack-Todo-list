import { useQuery } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";
import axiosInstance from "../../config/axios.config";

interface ICustomeQuery {
  queryKey: string[];
  apiUrl: string;
  config?: AxiosRequestConfig;
}

const useCustomeQuery = ({ queryKey, apiUrl, config }: ICustomeQuery) => {
  return useQuery({
    queryKey,
    queryFn: async () => {
      const { data } = await axiosInstance.get(apiUrl, config);
      return data;
    },
  });
};

export default useCustomeQuery;
