import { useQuery } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";
import axiosInstance from "../../config/axios.config";

interface IAuthenticatedQuery {
  queryKey: string[];
  apiUrl: string;
  config?: AxiosRequestConfig;
}

const useAuthenticatedQuery = ({
  queryKey,
  apiUrl,
  config,
}: IAuthenticatedQuery) => {
  return useQuery({
    queryKey,
    queryFn: async () => {
      const { data } = await axiosInstance.get(apiUrl, config);
      return data;
    },
  });
};

export default useAuthenticatedQuery;
