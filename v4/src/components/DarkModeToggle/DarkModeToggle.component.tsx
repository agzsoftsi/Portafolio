import React, { useEffect } from "react";
import useGlobalStore from "../../store/useGlobalStore";
import { Button } from "@chakra-ui/react";

export default function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useGlobalStore();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [darkMode]);

  return (
    <Button size="sm" onClick={toggleDarkMode}>
      {darkMode ? "☀️ Claro" : "🌙 Oscuro"}
    </Button>
  );
}
