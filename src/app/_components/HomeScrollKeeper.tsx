"use client";

import { useEffect, useLayoutEffect } from "react";

const HOME_KEY = "asc-home-scroll-y";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function ScrollKeeper({ storageKey }: { storageKey: string }) {
  useIsomorphicLayoutEffect(() => {
    const stored = sessionStorage.getItem(storageKey);
    if (stored !== null) {
      const y = parseInt(stored, 10);
      if (!Number.isNaN(y)) {
        window.scrollTo({ top: y, behavior: "instant" as ScrollBehavior });
      }
      sessionStorage.removeItem(storageKey);
    }
  }, [storageKey]);
  return null;
}

export function saveScroll(storageKey: string) {
  if (typeof window !== "undefined") {
    sessionStorage.setItem(storageKey, String(window.scrollY));
  }
}

export function HomeScrollKeeper() {
  return <ScrollKeeper storageKey={HOME_KEY} />;
}

export function saveHomeScroll() {
  saveScroll(HOME_KEY);
}
