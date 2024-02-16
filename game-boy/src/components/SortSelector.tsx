import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronBarDown } from "react-icons/bs";

const SortSelector = () => {
  const [data, error] = useState();

  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<BsChevronBarDown></BsChevronBarDown>}
        ></MenuButton>
        <MenuList>
          <MenuItem>Item</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default SortSelector;
