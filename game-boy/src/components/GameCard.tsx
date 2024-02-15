import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { GameResult } from "../hooks/useGames";

interface GameResultProps {
  gameResult: GameResult;
}

const GameCard = ({ gameResult }: GameResultProps) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={gameResult.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{gameResult.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
