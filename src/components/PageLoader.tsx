"use client";

import { useEffect, useState } from "react";
import { portfolio } from "@/data/portfolio";

export default function PageLoader() {
  const [isHiding, setIsHiding] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hideTimer = setTimeout(() => {
      setIsHiding(true);
    }, 900);

    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 1450);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[120] flex items-center justify-center bg-background/92 backdrop-blur-md transition-opacity duration-500 ${
        isHiding ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center gap-5">
        <div className="pointer-events-none absolute -top-10 h-28 w-28 rounded-full bg-zinc-300/40 blur-2xl dark:bg-zinc-700/40" />

        <div className="h-10 w-10 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-700 dark:border-zinc-700 dark:border-t-zinc-200" />

        <div className="text-center">
          <p className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            {portfolio.name}
          </p>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
            Carregando experiência...
          </p>
        </div>
      </div>
    </div>
  );
}
