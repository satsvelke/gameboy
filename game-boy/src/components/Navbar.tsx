import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.jpg";
import SwitchTheme from "./SwitchTheme";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <SwitchTheme></SwitchTheme>
    </HStack>
  );
};

export default Navbar;
