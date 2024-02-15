import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

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

const GameGrid = () => {
  const [games, setGames] = useState<GameResult[]>([]);
  const [error, SetError] = useState("");

  useEffect(() => {
    apiClient
      .get<Games>("/games")
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((error) => {
        SetError(error.message);
      })
      .finally(() => {});
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((c) => (
          <li key={c.id}>{c.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
