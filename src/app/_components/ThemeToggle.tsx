"use client";

import { useEffect, useState } from "react";

type Theme = "paper" | "light" | "dark";

const THEMES: Theme[] = ["paper", "light", "dark"];
const LABELS: Record<Theme, string> = {
  paper: "PPR",
  light: "LGT",
  dark: "DRK",
};

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("paper");

  useEffect(() => {
    const attr = document.documentElement.getAttribute("data-theme");
    if (attr === "paper" || attr === "light" || attr === "dark") {
      setTheme(attr);
    }
  }, []);

  const apply = (next: Theme) => {
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("asc-theme", next);
    } catch {}
  };

  return (
    <div
      className="flex items-center gap-1 px-2 py-2 font-mono text-[10px] uppercase tracking-[0.15em] md:gap-1.5 md:px-4 md:py-4 md:text-xs"
      role="group"
      aria-label="Theme"
    >
      {THEMES.map((t) => {
        const active = theme === t;
        return (
          <button
            key={t}
            type="button"
            onClick={() => apply(t)}
            aria-pressed={active}
            aria-label={`${t} theme`}
            className={`border px-1.5 py-0.5 transition-colors md:px-2 ${
              active
                ? "border-ink bg-ink text-paper"
                : "border-transparent opacity-50 hover:opacity-100"
            }`}
          >
            {LABELS[t]}
          </button>
        );
      })}
    </div>
  );
}
