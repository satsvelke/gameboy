import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { GameResult } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface GameResultProps {
  gameResult: GameResult;
}

const GameCard = ({ gameResult }: GameResultProps) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={gameResult.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{gameResult.name}</Heading>

        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={gameResult.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <CriticScore score={gameResult.metacritic}></CriticScore>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
