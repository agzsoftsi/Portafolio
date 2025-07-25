import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Box, Heading, Text } from "@chakra-ui/react";

// Envoltorio motion para Chakra
const MotionSection = motion(Box);

export default function Projects() {
  const { t } = useTranslation();

  return (
    <MotionSection
      as="section"
      id="projects"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      scrollMarginTop="80px"
    >
      <Box py="150px" bg="#B9BEC4" height="100vh" px="30px">
        <Heading
          as="h2"
          fontSize="36px"
          fontFamily="Raleway"
          color="black"
          fontWeight="semibold"
          mb={2}
        >
          🧩 {t("projects.title")}
        </Heading>
        <Text
          color={{
            base: "gray.600",
            _dark: "gray.300",
          }}
        >
          {t("projects.description")}
        </Text>
      </Box>
    </MotionSection>
  );
}
