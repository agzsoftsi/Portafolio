import React from "react";
import { Box, VStack } from "@chakra-ui/react";

import useGlobalStore from "../../store/useGlobalStore";
import SectionContainer from "./Sections/SectionsContainer";

export default function View2DPage() {
  const { darkMode } = useGlobalStore();

  // Colores dinámicos según modo claro/oscuro
  const bgColor = darkMode ? "gray.900" : "gray.50";
  const textColor = darkMode ? "gray.100" : "gray.900";

  return (
    <Box
      minH="100vh"
      bg={bgColor}
      color={textColor}
      transition="all 0.3s ease"
      paddingTop="100px"
      fontFamily="Raleway"
    >
      <SectionContainer />
    </Box>
  );
}
