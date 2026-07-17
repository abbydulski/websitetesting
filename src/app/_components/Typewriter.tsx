"use client";

import { useEffect, useState } from "react";

type TypewriterProps = {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
};

export function Typewriter({
  text,
  speed = 28,
  delay = 0,
  className,
}: TypewriterProps) {
  const [i, setI] = useState(0);

  useEffect(() => {
    setI(0);
    let intervalId: ReturnType<typeof setInterval> | null = null;
    const startId = setTimeout(() => {
      intervalId = setInterval(() => {
        setI((prev) => {
          if (prev >= text.length) {
            if (intervalId) clearInterval(intervalId);
            return prev;
          }
          return prev + 1;
        });
      }, speed);
    }, delay);
    return () => {
      clearTimeout(startId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, speed, delay]);

  const visible = text.slice(0, i);
  const lines = visible.split("\n");
  return (
    <span className={className}>
      {lines.map((line, idx) => (
        <span key={idx}>
          {line}
          {idx < lines.length - 1 ? <br /> : null}
        </span>
      ))}
      {/* Reserve final size so layout doesn't shift as text types */}
      <span aria-hidden="true" className="invisible absolute">
        {text}
      </span>
    </span>
  );
}
