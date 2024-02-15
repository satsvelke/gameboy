import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const skelotons = [1, 2, 3, 4, 5, 6];

const GameGrid = () => {
  const { data, error, isLoading } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={3}>
        {isLoading &&
          skelotons.map((sk) => (
            <GameCardContainer key={sk}>
              <GameCardSkeleton></GameCardSkeleton>
            </GameCardContainer>
          ))}
        {data.map((gameResult) => (
          <GameCardContainer key={gameResult.id}>
            <GameCard gameResult={gameResult}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
