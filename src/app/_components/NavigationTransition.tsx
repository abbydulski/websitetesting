"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

type Phase =
  | "idle"
  | "grid"
  | "no-verticals"
  | "no-horizontals"
  | "transit"
  | "reveal-header"
  | "reveal-hero"
  | "done";

export function NavigationTransition() {
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>("idle");
  const running = useRef(false);

  const runTransition = useCallback(
    (href: string) => {
      if (running.current) return;
      running.current = true;

      setPhase("grid");
      const t: number[] = [];
      t.push(window.setTimeout(() => setPhase("no-verticals"), 60));
      t.push(window.setTimeout(() => setPhase("no-horizontals"), 100));
      t.push(
        window.setTimeout(() => {
          setPhase("transit");
          router.push(href);
        }, 140),
      );
      t.push(window.setTimeout(() => setPhase("reveal-header"), 260));
      t.push(window.setTimeout(() => setPhase("reveal-hero"), 320));
      t.push(window.setTimeout(() => setPhase("done"), 380));
      t.push(
        window.setTimeout(() => {
          setPhase("idle");
          running.current = false;
        }, 440),
      );
    },
    [router],
  );

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const anchor = (e.target as HTMLElement | null)?.closest?.("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;
      if (
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("#")
      )
        return;
      if (anchor.target && anchor.target !== "_self") return;
      if (anchor.hasAttribute("download")) return;

      let url: URL;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;

      const dest = url.pathname + url.search + url.hash;
      const current =
        window.location.pathname + window.location.search + window.location.hash;
      if (dest === current) return;

      if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      e.preventDefault();
      runTransition(dest);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [runTransition]);

  if (phase === "idle") return null;

  return (
    <div className={`nav-transition is-${phase}`} aria-hidden="true">
      <div className="nav-transition__panel">
        <div className="nav-transition__grid-v" />
        <div className="nav-transition__grid-h" />
      </div>
      <div className="nav-transition__logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/spade-logo.svg"
          alt=""
          className="logo-mark h-5 w-auto md:h-6"
        />
        <span className="hidden whitespace-nowrap sm:inline">
          Advanced Spade Company
        </span>
        <span className="whitespace-nowrap sm:hidden">ASC</span>
      </div>
    </div>
  );
}
