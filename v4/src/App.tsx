import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import View2DPage from "./pages/View2D/View2D.page";
import View3DPage from "./pages/View3D/View3D.page";

import Loader from "./components/Loader/Loader.component";
import HeaderControls from "./components/HeaderControls/HeaderControls.component";

export default function App() {
  return (
    <BrowserRouter>
      {/* Loader puede ir en layout o en el propio route si aplica */}
      <Loader />

      {/* Controles flotantes con Chakra */}
      <HeaderControls />

      {/* Rutas principales */}
      <Routes>
        <Route path="/" element={<View2DPage />} />
        <Route path="/3d" element={<View3DPage />} />
      </Routes>
    </BrowserRouter>
  );
}
