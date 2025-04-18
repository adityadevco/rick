"use client";

import { useEffect } from "react";

// Rick Astley's "Never Gonna Give You Up" video URL with time parameter
const RICKROLL_URL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=8s";

export default function RickRollRedirect() {
  useEffect(() => {
    try {
      const currentCount = localStorage.getItem("rickroll_count") || "0";
      const newCount = Number.parseInt(currentCount) + 1;
      localStorage.setItem("rickroll_count", newCount.toString());
      window.location.replace(RICKROLL_URL);
    } catch (e) {
      window.location.replace(RICKROLL_URL);
    }
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-white text-center">
        <p className="text-xl mb-4">Redirecting...</p>
        <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin mx-auto" />
      </div>
    </div>
  );
}
