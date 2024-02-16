import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.jpg";
import SwitchTheme from "./SwitchTheme";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput></SearchInput>
      <SwitchTheme></SwitchTheme>
    </HStack>
  );
};

export default Navbar;
