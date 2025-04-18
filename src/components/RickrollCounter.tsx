"use client";

import { useState, useEffect } from "react";

export function RickrollCounter() {
  // Initial state is undefined so server and client markup match
  const [count, setCount] = useState<string | undefined>(undefined);

  useEffect(() => {
    try {
      const baseCount = 3089743; // Starting fake count
      const storedCount = localStorage.getItem("rickroll_count");
      let totalCount = baseCount;
      if (storedCount) {
        totalCount += Number.parseInt(storedCount);
      }
      setCount(totalCount.toLocaleString());
    } catch (e) {
      setCount("3,089,743"); // Fallback if localStorage not available
    }
  }, []);

  return (
    <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 min-h-[1.5em]">
      {/* Only show count on client to avoid hydration issues */}
      {count || <span className="opacity-30">3,089,743</span>}
    </h2>
  );
}
