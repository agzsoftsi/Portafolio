import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import useGlobalStore from "../../../store/useGlobalStore";

const MotionSection = motion(Box);

export default function About() {
  const { t } = useTranslation();
  const { darkMode } = useGlobalStore();
  const bgColor = darkMode ? "#08153B" : "#B9BEC4";
  const titleColor = darkMode ? "#66B1E8" : "#0000EE";
  const textColor = darkMode ? "#F5EBEB" : "#000000";

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
      <Box py="150px" bg={bgColor} height="100vh" px="40px">
        <Heading
          as="h2"
          fontSize={{ base: "24px", md: "36px" }}
          fontFamily="Raleway"
          color={titleColor}
          fontWeight="semibold"
          mb="40px"
        >
          {t("about.title")}
        </Heading>
        <Box display="flex" flexDirection="row">
          <Text color={textColor} fontSize={{ base: "12px", md: "16px" }}>
            {t("about.description")}
          </Text>
          <Image src="" />
        </Box>
      </Box>
    </MotionSection>
  );
}
