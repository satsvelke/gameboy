import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px"></Image>
    </HStack>
  );
};

export default Navbar;
