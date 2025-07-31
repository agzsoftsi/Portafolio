import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Box, Heading, Text } from "@chakra-ui/react";
import useGlobalStore from "../../../store/useGlobalStore";

const MotionSection = motion(Box);

export default function Home() {
  const { t } = useTranslation();
  const { darkMode } = useGlobalStore();
  const bgColor = darkMode ? "#000000" : "#EEEEE";
  const titleColor = darkMode ? "#66B1E8" : "#0000EE";
  const textColor = darkMode ? "#F5EBEB" : "#000000";

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
      <Box
        as="header"
        py="150px"
        textAlign="center"
        bg={bgColor}
        height="100vh"
        px="30px"
      >
        <Heading
          as="h1"
          fontSize={{ base: "28px", md: "65px" }}
          fontFamily="Raleway"
          fontWeight="bold"
          color={titleColor}
        >
          {t("header.title")}
        </Heading>
        <Box mt="25px">
          <Text mt={2} fontSize={{ base: "md", md: "lg" }} color={textColor}>
            {t("header.subtitle")}
          </Text>
          <Text mt={2} fontSize={{ base: "md", md: "lg" }} color={textColor}>
            {t("header.role")}
          </Text>
        </Box>
      </Box>
    </MotionSection>
  );
}
