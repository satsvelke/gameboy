import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";

const apiClient = new ApiClient<GenreResult>("/genres");
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
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
  });

export default useGenre;
