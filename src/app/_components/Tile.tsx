"use client";

import Link from "next/link";
import { ViewTransition, type ReactNode } from "react";

type TileProps = {
  section: string;
  pageNumber: number | string;
  title: ReactNode;
  sublabel?: string;
  body?: ReactNode;
  href?: string;
  viewName?: string;
  className?: string;
  image?: { src: string; alt: string; position?: string };
  icon?: string;
  comingSoon?: boolean;
};

export function Tile({
  section,
  pageNumber,
  title,
  sublabel,
  body,
  href,
  viewName,
  className = "",
  image,
  icon,
  comingSoon = false,
}: TileProps) {
  const isInteractive = !!href && !comingSoon;

  const inner = (
    <div className="relative flex h-full flex-col">
      <div className="flex items-center justify-between gap-3 border-b border-ink px-3 py-2 font-mono text-[10px] uppercase tracking-wider md:px-4 md:text-xs">
        <div className="flex min-w-0 items-center gap-2">
          {icon ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img src={icon} alt="" className="h-3 w-3 shrink-0 md:h-3.5 md:w-3.5" />
          ) : null}
          <span className="truncate font-bold">{section}</span>
        </div>
        <span className="shrink-0">
          {comingSoon ? "[ SOON ]" : String(pageNumber).padStart(2, "0")}
        </span>
      </div>
      {image ? (
        <div className="relative flex-1 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image.src}
            alt={image.alt}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: image.position ?? "center" }}
          />
          <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
            <h2 className="font-display text-2xl font-black uppercase leading-[0.9] tracking-tight text-paper drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] md:text-3xl lg:text-4xl">
              {title}
            </h2>
            {sublabel ? (
              <p className="mt-1 font-display text-xs font-bold uppercase tracking-tight text-paper drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] md:text-sm">
                [{sublabel}]
              </p>
            ) : null}
          </div>
        </div>
      ) : (
        <div className="flex flex-1 flex-col p-4 md:p-6">
          <h2 className="font-display text-[clamp(1.5rem,3vw,3rem)] font-black uppercase leading-[0.9] tracking-tight">
            {title}
          </h2>
          {sublabel ? (
            <p className="mt-2 font-display text-sm font-bold uppercase tracking-tight md:text-base">
              [{sublabel}]
            </p>
          ) : null}
          {body ? (
            <p className="mt-auto pt-4 font-mono text-[11px] uppercase leading-relaxed tracking-wider md:text-xs">
              {body}
            </p>
          ) : null}
        </div>
      )}
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

  if (isInteractive) {
    return wrap(
      <Link
        href={href!}
        className={`${base} group relative block transition-colors duration-200 hover:bg-ink hover:text-paper`}
      >
        {inner}
      </Link>
    );
  }

  return wrap(<div className={`${base} relative ${comingSoon ? "opacity-60" : ""}`}>{inner}</div>);
}
