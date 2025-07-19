import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Box, Heading, Text } from "@chakra-ui/react";

// Chakra Motion wrapper
const MotionSection = motion(Box);

export default function Skills() {
  const { t } = useTranslation();

  return (
    <MotionSection
      as="section"
      id="skill"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      scrollMarginTop="80px"
    >
      <Heading as="h2" size="xl" fontWeight="semibold" mb={2}>
        👤 {t("skills.title")}
      </Heading>
      <Text
        color={{
          base: "gray.600",
          _dark: "gray.300",
        }}
      >
        {t("skills.description")}
      </Text>
    </MotionSection>
  );
}
