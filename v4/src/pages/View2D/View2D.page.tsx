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

export default function View2DPage() {
  const { t } = useTranslation();
  const { darkMode } = useGlobalStore();

  // Colores dinámicos según modo claro/oscuro
  const bgColor = darkMode ? "gray.900" : "gray.50";
  const textColor = darkMode ? "gray.100" : "gray.900";
  const subtitleColor = darkMode ? "gray.400" : "gray.600";

  return (
    <Box minH="100vh" bg={bgColor} color={textColor} transition="all 0.3s ease">
      <Box as="header" p={8} textAlign="center">
        <Heading as="h1" size="2xl" fontWeight="bold">
          {t("header.title")}
        </Heading>
        <Text mt={2} fontSize="lg" color={subtitleColor}>
          {t("header.subtitle")}
        </Text>
        <Text mt={2} fontSize="lg" color={subtitleColor}>
          {t("header.role")}
        </Text>
      </Box>

      <Box as="main" px={6} maxW="3xl" mx="auto">
        <VStack align="stretch">
          <About />
          <Skills />
          <Projects />
          <Jobs />
          <Education />
          <Contact />
        </VStack>
      </Box>
    </Box>
  );
}
