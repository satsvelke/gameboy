import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenre, { GenreResult } from "../hooks/useGenre";
import getCroppedImages from "../services/image-url";

interface GenreListProps {
  onGenreSelect: (genre: GenreResult) => void;
  selectedGenre: GenreResult | null;
}

const GenreList = ({ onGenreSelect, selectedGenre }: GenreListProps) => {
  const { data, isLoading } = useGenre();

  if (isLoading) return <Spinner></Spinner>;

  return (
    <>
      <List>
        {data.map((g) => (
          <ListItem key={g.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImages(g.image_background)}
              ></Image>
              <Button
                fontWeight={g.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onGenreSelect(g)}
                variant="link"
              >
                {g.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
