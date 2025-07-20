import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const View2DPage = React.lazy(() => import("./pages/View2D/View2D.page"));
const View3DPage = React.lazy(() => import("./pages/View3D/View3D.page"));
const Loader = React.lazy(() => import("./components/Loader/Loader.component"));
const HeaderControls = React.lazy(
  () => import("./components/HeaderControls/HeaderControls.component")
);

export default function App() {
  return (
    <BrowserRouter>
      {/* Loader puede ir en layout o en el propio route si aplica */}
      <Loader />

      {/* Controles flotantes con Chakra */}
      <HeaderControls />

      {/* Rutas principales */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<View2DPage />} />
          <Route path="/3d" element={<View3DPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
