import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { GameResult } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImages from "../services/image-url";
import GameCardContainer from "./GameCardContainer";

interface GameResultProps {
  gameResult: GameResult;
}

const GameCard = ({ gameResult }: GameResultProps) => {
  return (
    <Card>
      <Image src={getCroppedImages(gameResult.background_image)}></Image>
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={2}>
          <PlatformIconList
            platforms={gameResult.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <CriticScore score={gameResult.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize="2xl">{gameResult.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
