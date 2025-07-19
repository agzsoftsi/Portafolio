import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const LANGUAGES = [
  { code: "es", label: "Español", emoji: "🇪🇸" },
  { code: "en", label: "English", emoji: "🇺🇸" },
  { code: "fr", label: "Français", emoji: "🇫🇷" },
  { code: "zh", label: "中文", emoji: "🇨🇳" },
  { code: "pt", label: "Português", emoji: "🇧🇷" },
  { code: "it", label: "Italiano", emoji: "🇮🇹" },
  { code: "ar", label: "العربية", emoji: "🇸🇦" },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const currentLang =
    LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0];

  const handleSelect = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left z-50">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg shadow-sm hover:bg-zinc-100 dark:hover:bg-zinc-700 transition"
      >
        <span>{currentLang.emoji}</span>
        <span className="hidden sm:inline text-sm font-medium capitalize">
          {currentLang.label}
        </span>
        <svg
          className={`w-3 h-3 ml-1 transform transition-transform ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-44 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-md overflow-hidden"
          >
            {LANGUAGES.map((lang) => (
              <li key={lang.code}>
                <button
                  onClick={() => handleSelect(lang.code)}
                  className={`flex items-center w-full px-4 py-2 text-sm text-zinc-800 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-700 transition ${
                    i18n.language === lang.code ? "font-semibold" : ""
                  }`}
                >
                  <span className="mr-2">{lang.emoji}</span>
                  <span>{lang.label}</span>
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
