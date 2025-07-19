import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Box, Heading, Text } from "@chakra-ui/react";

const MotionSection = motion(Box);

export default function About() {
  const { t } = useTranslation();

  return (
    <MotionSection
      as="section"
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      scrollMarginTop="80px"
    >
      <Heading as="h2" size="xl" fontWeight="semibold" mb={2}>
        {t("about.title", "Sobre Mí")}
      </Heading>
      <Text
        color={{
          base: "gray.600",
          _dark: "gray.300",
        }}
      >
        {t(
          "about.text",
          "Soy un desarrollador con pasión por la tecnología, la innovación y el aprendizaje constante."
        )}
      </Text>
    </MotionSection>
  );
}
