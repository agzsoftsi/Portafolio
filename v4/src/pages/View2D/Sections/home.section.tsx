import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Box, Heading, Text } from "@chakra-ui/react";

const MotionSection = motion(Box);

export default function Home() {
  const { t } = useTranslation();

  return (
    <MotionSection
      as="section"
      id="Home"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      scrollMarginTop="80px"
    >
      <Box as="header" px={8} py="150px" textAlign="center">
        <Heading as="h1" size="2xl" fontWeight="bold">
          {t("header.title")}
        </Heading>
        <Text mt={2} fontSize="lg">
          {t("header.subtitle")}
        </Text>
        <Text mt={2} fontSize="lg">
          {t("header.role")}
        </Text>
      </Box>
    </MotionSection>
  );
}
