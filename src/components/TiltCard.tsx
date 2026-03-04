"use client";

import { CSSProperties, ReactNode, useState } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export default function TiltCard({
  children,
  className = "",
  style,
}: TiltCardProps) {
  const [transform, setTransform] = useState(
    "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)"
  );

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
  };

  const handleMouseLeave = () => {
    setTransform("perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)");
  };

  return (
    <div
      className={`will-change-transform transition-transform duration-300 ease-out ${className}`}
      style={{ ...style, transform, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
