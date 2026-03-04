"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type AnimatedProfileImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
};

export default function AnimatedProfileImage({
  src,
  alt,
  width,
  height,
  priority = false,
}: AnimatedProfileImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 280);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.94, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
      className="relative overflow-hidden rounded-[1.5rem] bg-zinc-100 dark:bg-zinc-800"
    >
      <div
        className={`pointer-events-none absolute inset-0 z-10 transition-opacity duration-700 ease-out ${
          isLoaded ? "opacity-0" : "opacity-100"
        } bg-gradient-to-br from-zinc-200/60 via-zinc-200/20 to-zinc-300/40 dark:from-zinc-700/60 dark:via-zinc-700/20 dark:to-zinc-600/40`}
      />

      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        onLoad={() => setIsLoaded(true)}
        className={`h-auto w-full transition-all duration-1000 ease-out ${
          isLoaded
            ? "opacity-100 scale-100 blur-0"
            : "opacity-0 scale-[1.03] blur-sm"
        }`}
      />
    </motion.div>
  );
}
