import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImages from "../services/image-url";

const GenreList = () => {
  const { data } = useGenre();
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
              <Text>{g.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
