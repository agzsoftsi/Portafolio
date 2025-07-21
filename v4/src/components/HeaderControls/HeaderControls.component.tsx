import React from "react";
import { HStack, Box, Image, Link } from "@chakra-ui/react";
import DarkModeToggle from "../../components/DarkModeToggle/DarkModeToggle.component";
import VistaToggle from "../../components/VistaToggle/VistaToggle.component";
import LanguageSwitcher from "../../components/LanguageSwitcher/LanguageSwitcher.component";
import Logo from "../../assets/icons/logo.png";

export default React.memo(function HeaderControls() {
  return (
    <Box
      position="fixed"
      w="100%"
      zIndex={50}
      bgColor="rgba(255, 255, 255, 0.2)"
      justifyContent="space-between"
      display="flex"
    >
      <Link href="https://karlgarmor.tech/">
        <Image src={Logo} h={50} w={50} alt="logo" />
      </Link>
      <HStack padding={5} align="center">
        <DarkModeToggle />
        <VistaToggle />
        <LanguageSwitcher />
      </HStack>
    </Box>
  );
});
