import { Badge } from "@chakra-ui/react";

interface CriticScoreProps {
  score: number;
}

const CriticScore = ({ score }: CriticScoreProps) => {
  let color = score > 75 ? "green" : score > 60 && score < 75 ? "yellow" : "";

  return (
    <Badge colorScheme={color} borderRadius={2} fontSize="14px">
      {score}
    </Badge>
  );
};

export default CriticScore;
