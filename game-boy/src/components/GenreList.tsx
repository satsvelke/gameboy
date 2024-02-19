import {
  Button,
  HStack,
  Heading,
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
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((g) => (
          <ListItem key={g.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImages(g.image_background)}
              ></Image>
              <Button
                whiteSpace="normal"
                textAlign="left"
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
