import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./locales/en/translation.json";
import translationES from "./locales/es/translation.json";
import translationFR from "./locales/fr/translation.json";
import translationZH from "./locales/zh/translation.json";
import translationPT from "./locales/pt/translation.json";
import translationIT from "./locales/it/translation.json";
import translationAR from "./locales/ar/translation.json";

const resources = {
  en: { translation: translationEN },
  es: { translation: translationES },
  fr: { translation: translationFR },
  zh: { translation: translationZH },
  pt: { translation: translationPT },
  it: { translation: translationIT },
  ar: { translation: translationAR },
};

i18n
  .use(LanguageDetector) // Detecta idioma del navegador
  .use(initReactI18next) // Enlaza con React
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
  });

export default i18n;
