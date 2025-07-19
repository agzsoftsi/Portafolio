import React from "react";
import useGlobalStore from "../../store/useGlobalStore";

export default function Loader() {
  const isLoading = useGlobalStore((state) => state.isLoading);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
      <div className="h-12 w-12 rounded-full border-4 border-white border-b-transparent animate-spin" />
    </div>
  );
}
