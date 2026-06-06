"use client";

import Link from "next/link";
import { ViewTransition, type ReactNode } from "react";
import { saveScroll } from "./HomeScrollKeeper";

type PanelProps = {
  label?: string;
  section: string;
  pageNumber: number | string;
  headline: ReactNode;
  href?: string;
  children?: ReactNode;
  className?: string;
  viewName?: string;
  scrollKey?: string;
  compact?: boolean;
};

export function Panel({
  label = "ADVANCED SPADE CO",
  section,
  pageNumber,
  headline,
  href,
  children,
  className = "",
  viewName,
  scrollKey = "asc-home-scroll-y",
  compact = false,
}: PanelProps) {
  const inner = compact ? (
    <div className="flex h-full items-center justify-between gap-3 px-4 md:px-5">
      <h2 className="font-mono text-xs font-bold uppercase tracking-wide md:text-sm">
        {headline}
      </h2>
      <span className="font-mono text-[10px] font-bold uppercase tracking-wide">
        {String(pageNumber).padStart(2, "0")}
      </span>
    </div>
  ) : (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between gap-4 border-b border-current px-6 py-3 font-mono text-xs uppercase tracking-wide">
        <span className="min-w-0 truncate font-bold">{label}</span>
        <span className="min-w-0 truncate font-bold">{section}</span>
        <span className="shrink-0">{pageNumber}</span>
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-10">
        <h2 className="font-display text-3xl font-bold uppercase leading-[0.95] tracking-tight md:text-4xl lg:text-5xl">
          {headline}
        </h2>
        {children ? <div className="mt-auto pt-8">{children}</div> : null}
      </div>
    </div>
  );

  const base = `bg-paper text-ink ${className}`;

  const wrap = (node: ReactNode) =>
    viewName ? (
      <ViewTransition name={viewName} share="morph">
        {node}
      </ViewTransition>
    ) : (
      node
    );

  if (href) {
    return wrap(
      <Link
        href={href}
        transitionTypes={["zoom-in"]}
        onClick={() => saveScroll(scrollKey)}
        className={`${base} block transition-colors duration-300 hover:bg-ink hover:text-paper`}
      >
        {inner}
      </Link>
    );
  }

  return wrap(<div className={base}>{inner}</div>);
}
