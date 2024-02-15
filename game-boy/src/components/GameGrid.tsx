import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const skelotons = [1, 2, 3, 4, 5, 6];

const GameGrid = () => {
  const { gamesResults, error, isLoading } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10}>
        {isLoading &&
          skelotons.map((sk) => <GameCardSkeleton key={sk}></GameCardSkeleton>)}
        {gamesResults.map((gameResult) => (
          <GameCard key={gameResult.id} gameResult={gameResult}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
