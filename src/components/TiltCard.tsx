"use client";

import { CSSProperties, ReactNode, useState } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  enableLight?: boolean;
};

export default function TiltCard({
  children,
  className = "",
  style,
  enableLight = true,
}: TiltCardProps) {
  const [transform, setTransform] = useState(
    "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)"
  );
  const [light, setLight] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 4;
    const rotateX = ((centerY - y) / centerY) * 4;

    setTransform(
      `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(8px)`
    );
    if (enableLight) {
      setLight({
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
        opacity: 1,
      });
    }
  };

  const handleMouseLeave = () => {
    setTransform("perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)");
    if (enableLight) {
      setLight((previous) => ({ ...previous, opacity: 0 }));
    }
  };

  return (
    <div
      className={`relative overflow-hidden will-change-transform transition-transform duration-300 ease-out ${className}`}
      style={{ ...style, transform, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {enableLight ? (
        <>
          <div
            className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
            style={{
              borderRadius: "inherit",
              opacity: light.opacity,
              background: `radial-gradient(220px circle at ${light.x}% ${light.y}%, rgba(255, 255, 255, 0.34), rgba(255, 255, 255, 0.12) 35%, rgba(255, 255, 255, 0) 70%)`,
              mixBlendMode: "screen",
            }}
          />
          <div
            className="pointer-events-none absolute inset-[1px] z-10 border border-white/20 opacity-0 transition-opacity duration-300 dark:border-white/10"
            style={{ borderRadius: "inherit", opacity: light.opacity * 0.8 }}
          />
        </>
      ) : null}
      {children}
    </div>
  );
}
