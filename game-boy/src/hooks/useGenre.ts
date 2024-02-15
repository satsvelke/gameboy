import useData from "./useData";

export interface GenreResult {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

const useGenre = () => useData<GenreResult>("/genres");

export default useGenre;
