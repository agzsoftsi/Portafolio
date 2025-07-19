import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import View2DPage from "./pages/View2D/View2D.page";
import View3DPage from "./pages/View3D/View3D.page";
import DarkModeToggle from "./components/DarkModeToggle/DarkModeToggle.component";
import VistaToggle from "./components/VistaToggle/VistaToggle.component";
import Loader from "./components/Loader/Loader.component";
import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher.component";

export default function App() {
  return (
    <BrowserRouter>
      {/* Loader puede ir en layout o en el propio route si aplica */}
      <Loader />

      {/* Controles flotantes con Chakra */}
      <Box position="fixed" top={4} right={4} zIndex={50}>
        <Flex gap={2}>
          <DarkModeToggle />
          <VistaToggle />
          <LanguageSwitcher />
        </Flex>
      </Box>

      {/* Rutas principales */}
      <Routes>
        <Route path="/" element={<View2DPage />} />
        <Route path="/3d" element={<View3DPage />} />
      </Routes>
    </BrowserRouter>
  );
}
