import React from "react";
import { useNavigate } from "react-router-dom";
import useGlobalStore from "../../store/useGlobalStore";
import { Icon, Switch } from "@chakra-ui/react";
import { LuLayers2, LuLayers3 } from "react-icons/lu";

export default function VistaToggle() {
  const { view, setView, setLoading } = useGlobalStore();
  const navigate = useNavigate();

  const toggleView = () => {
    setLoading(true);
    setTimeout(() => {
      const next = view === "2d" ? "3d" : "2d";
      setView(next);
      navigate(next === "2d" ? "/" : "/3d");
      setLoading(false);
    }, 1200);
  };

  return (
    <Switch.Root
      checked={view === "2d"}
      onCheckedChange={toggleView}
      colorPalette="blue"
      size="lg"
    >
      <Switch.HiddenInput />
      <Switch.Control>
        <Switch.Thumb />
        <Switch.Indicator fallback={<Icon as={LuLayers2} color="gray.400" />}>
          <Icon as={LuLayers3} color="yellow.400" />
        </Switch.Indicator>
      </Switch.Control>
    </Switch.Root>
  );
}
