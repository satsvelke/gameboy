import { useQuery } from "@tanstack/react-query";
import apiClient, { DataResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<DataResponse<Platform>>("/platforms/lists/parents")
        .then((resp) => resp.data),
    staleTime: 24 * 60 * 60 * 1000,
  });

export default usePlatforms;
