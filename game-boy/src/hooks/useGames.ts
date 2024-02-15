import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface GameResult {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: {};
  ratings_count: number;
  reviews_text_count: number;
  added: number;
  added_by_status: {};
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: string;
  esrb_rating: {
    id: number;
    slug: string;
    name: string;
  };
  platforms: [
    {
      platform: {
        id: number;
        slug: string;
        name: string;
      };
      released_at: string;
      requirements: {
        minimum: string;
        recommended: string;
      };
    }
  ];
}

interface Games {
  count: number;
  next: string;
  previous: string;
  results: GameResult[];
}

const useGames = () => {
  const [gamesResults, setGames] = useState<GameResult[]>([]);
  const [error, SetError] = useState("");

  useEffect(() => {
    const abortController = new AbortController();

    apiClient
      .get<Games>("/games", { signal: abortController.signal })
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return null;
        SetError(error.message);
      })
      .finally(() => {});

    return () => abortController.abort();
  }, []);

  return { gamesResults, error };
};

export default useGames;
