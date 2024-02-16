import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children=<BsSearch></BsSearch>></InputLeftElement>
      <Input
        borderRadius={20}
        placeholder="search games...."
        variant="filled"
      ></Input>
    </InputGroup>
  );
};

export default SearchInput;
