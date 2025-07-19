import React from "react";
import { HStack, Box } from "@chakra-ui/react";
import DarkModeToggle from "../../components/DarkModeToggle/DarkModeToggle.component";
import VistaToggle from "../../components/VistaToggle/VistaToggle.component";
import LanguageSwitcher from "../../components/LanguageSwitcher/LanguageSwitcher.component";

export default function HeaderControls() {
  return (
    <Box position="fixed" top={4} right={4} zIndex={50}>
      <HStack padding={2} align="center">
        <DarkModeToggle />
        <VistaToggle />
        <LanguageSwitcher />
      </HStack>
    </Box>
  );
}
