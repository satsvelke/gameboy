import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface GenreResult {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

interface Genre {
  count: number;
  next: string;
  previous: string;
  results: GenreResult[];
}

const useGenre = () => {
  const [genreResults, setGenre] = useState<GenreResult[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    var abortController = new AbortController();

    apiClient
      .get<Genre>("genres", { signal: abortController.signal })
      .then((res) => {
        setGenre(res.data.results);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {});

    return () => abortController.abort();
  }, []);

  return { genreResults, setGenre, error, setError };
};

export default useGenre;
