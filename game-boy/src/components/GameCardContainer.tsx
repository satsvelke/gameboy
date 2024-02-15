import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface GameCardContainerProps {
  children: ReactNode;
}

const GameCardContainer = ({ children }: GameCardContainerProps) => {
  return (
    <Box overflow="hidden" borderRadius={10}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
