"use client";

import { useEffect, useState } from "react";

interface AdSenseAdProps {
  className?: string;
  style?: React.CSSProperties;
  slot?: string;
}

export default function AdSenseAd({ className, style, slot = "auto" }: AdSenseAdProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && !loaded) {
      setLoaded(true);
      // In a real app, this would activate the AdSense code
    }
  }, [loaded]);

  return (
    <div
      className={`ad-placeholder bg-zinc-800/30 flex items-center justify-center text-zinc-600 text-xs ${className || ""}`}
      style={{
        display: "block",
        minHeight: "90px",
        border: "1px dashed rgba(139, 139, 139, 0.2)",
        ...style,
      }}
      aria-label="Advertisement"
    >
      {/* This is just a placeholder for the ad space */}
      <span className="opacity-50">Ad Space</span>
    </div>
  );
}
