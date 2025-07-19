import React from "react";
import { useNavigate } from "react-router-dom";
import useGlobalStore from "../../store/useGlobalStore";

export default function VistaToggle() {
  const { view, setView, setLoading } = useGlobalStore();
  const navigate = useNavigate();

  const switchView = () => {
    setLoading(true);
    setTimeout(() => {
      const next = view === "2d" ? "3d" : "2d";
      setView(next);
      navigate(next === "2d" ? "/" : "/3d");
      setLoading(false);
    }, 1200);
  };

  return (
    <button
      onClick={switchView}
      className="px-3 py-1 rounded bg-indigo-600 text-white text-sm"
    >
      Vista {view === "2d" ? "3D" : "2D"}
    </button>
  );
}
