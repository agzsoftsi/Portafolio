import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Button, Text, VStack, Icon, Image } from "@chakra-ui/react";
import { SlArrowDown } from "react-icons/sl";

import ar from "../../assets/icons/ar.jpg";
import es from "../../assets/icons/es.jpg";
import en from "../../assets/icons/en.jpg";
import it from "../../assets/icons/it.jpg";
import fr from "../../assets/icons/fr.jpg";
import pt from "../../assets/icons/pt.jpg";
import cn from "../../assets/icons/cn.jpg";

const LANGUAGES = [
  { code: "es", label: "Español", emoji: "🇪🇸", icon: es },
  { code: "en", label: "English", emoji: "🇺🇸", icon: en },
  { code: "fr", label: "Français", emoji: "🇫🇷", icon: fr },
  { code: "zh", label: "中文", emoji: "🇨🇳", icon: cn },
  { code: "pt", label: "Português", emoji: "🇧🇷", icon: pt },
  { code: "it", label: "Italiano", emoji: "🇮🇹", icon: it },
  { code: "ar", label: "العربية", emoji: "🇸🇦", icon: ar },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const currentLang = useMemo(
    () => LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0],
    [i18n.language]
  );

  const handleSelect = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setOpen(false);
  };

  return (
    <Box position="relative" display="inline-block" zIndex={50}>
      <Button
        onClick={() => setOpen(!open)}
        variant="outline"
        size="sm"
        px={2}
        py={1.5}
        bg="white"
        _dark={{ bg: "gray.800" }}
        borderColor="gray.300"
        //_dark={{ borderColor: "gray.600" }}
        _hover={{
          bg: "gray.50",
          _dark: { bg: "gray.700" },
        }}
        display="flex"
        alignItems="center"
        gap={2}
        borderRadius="50px"
        h="27px"
      >
        <Text as="span">
          <Image src={currentLang.icon} h="15px" w="15px" alt="lang" />
        </Text>
        <Text
          as="span"
          fontSize="sm"
          fontWeight="medium"
          display={{ base: "none", sm: "inline" }}
          textTransform="capitalize"
        >
          {currentLang.emoji}
        </Text>
        <Box
          ml={1}
          transform={open ? "rotate(180deg)" : "rotate(0deg)"}
          transition="transform 0.2s"
          fill="none"
        >
          <Icon as={SlArrowDown} h={3} />
        </Box>
      </Button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <VStack
              position="absolute"
              right={0}
              mt={2}
              w="130px"
              bg="white"
              _dark={{ bg: "gray.800" }}
              border="1px"
              borderColor="gray.200"
              //_dark={{ borderColor: "gray.600" }}
              borderRadius="lg"
              boxShadow="md"
              overflow="hidden"
              //spacing={0}
            >
              {LANGUAGES.map((lang) => (
                <Button
                  key={lang.code}
                  onClick={() => handleSelect(lang.code)}
                  variant="ghost"
                  size="sm"
                  w="100px"
                  justifyContent="flex-start"
                  borderRadius={0}
                  bg="transparent"
                  color="gray.800"
                  _dark={{ color: "white" }}
                  _hover={{
                    bg: "gray.100",
                    _dark: { bg: "gray.700" },
                  }}
                  fontWeight={
                    i18n.language === lang.code ? "semibold" : "normal"
                  }
                  fontSize="sm"
                >
                  <Image src={lang.icon} h="20px" w="20px" alt="lang" />
                  <Text as="span">{lang.label}</Text>
                </Button>
              ))}
            </VStack>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}
