import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.jpg";
import SwitchTheme from "./SwitchTheme";
import SearchInput from "./SearchInput";

interface NavbarProps {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: NavbarProps) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput onSearch={onSearch}></SearchInput>
      <SwitchTheme></SwitchTheme>
    </HStack>
  );
};

export default Navbar;
