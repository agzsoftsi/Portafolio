import React from "react";
import useGlobalStore from "../../store/useGlobalStore";
import { Icon, Switch } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

export default React.memo(function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useGlobalStore();

  return (
    <Switch.Root
      checked={darkMode}
      onCheckedChange={toggleDarkMode}
      colorPalette="blue"
      size="lg"
    >
      <Switch.HiddenInput />
      <Switch.Control
        bg={darkMode ? "blue.500" : "blue.700"}
        transition="background 0.3s"
      >
        <Switch.Thumb />
        <Switch.Indicator fallback={<Icon as={FaMoon} color="gray.200" />}>
          <Icon as={FaSun} color="yellow.400" />
        </Switch.Indicator>
      </Switch.Control>
    </Switch.Root>
  );
});
