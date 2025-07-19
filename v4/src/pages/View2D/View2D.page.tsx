import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import About from "./Sections/About.section";
import Skills from "./Sections/Skills.section";
import Projects from "./Sections/Projects.section";
import Jobs from "./Sections/Jobs.section";
import Education from "./Sections/Education.section";
import Contact from "./Sections/Contact.section";
import useGlobalStore from "../../store/useGlobalStore";
import SectionContainer from "./Sections/SectionsContainer";

export default function View2DPage() {
  const { t } = useTranslation();
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
      <Box as="main" px={6} maxW="3xl" mx="auto">
        <VStack align="stretch">
          <SectionContainer />
        </VStack>
      </Box>
    </Box>
  );
}
