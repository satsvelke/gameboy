import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { Platform } from "../hooks/usePlatforms";

interface PlatformProps {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: PlatformProps) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    platstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };

  return (
    <HStack marginY={2}>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          color="gray.500"
          as={iconMap[platform.slug]}
        ></Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
