import { useQuery } from "@tanstack/react-query";
import { DataResponse } from "./useData";
import apiClient from "../services/api-client";

export interface GenreResult {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

// const useGenre = () => useData<GenreResult>("/genres");

const useGenre = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient
        .get<DataResponse<GenreResult>>("/genres")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
  });

export default useGenre;
