import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Box, Heading, Text } from "@chakra-ui/react";
import useGlobalStore from "../../../store/useGlobalStore";

const MotionSection = motion(Box);

export default function Contact() {
  const { t } = useTranslation();
  const { darkMode } = useGlobalStore();
  const bgColor = darkMode ? "#000000" : "#EEEEE";
  const titleColor = darkMode ? "#66B1E8" : "#0000EE";
  const textColor = darkMode ? "#F5EBEB" : "#000000";

  return (
    <MotionSection
      as="section"
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      scrollMarginTop="80px"
    >
      <Box py="150px" bg={bgColor} height="100vh" px="30px">
        <Heading
          as="h2"
          fontSize={{ base: "24px", md: "36px" }}
          fontFamily="Raleway"
          color={titleColor}
          fontWeight="semibold"
          mb={"40px"}
        >
          {t("contact.title")}
        </Heading>
        <Text color={textColor} fontSize={{ base: "12px", md: "16px" }}>
          {t("contact.description")}
        </Text>
      </Box>
    </MotionSection>
  );
}
