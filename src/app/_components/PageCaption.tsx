import type { ReactNode } from "react";

type PageCaptionProps = {
  children: ReactNode;
  className?: string;
};

export function PageCaption({ children, className = "" }: PageCaptionProps) {
  return (
    <div
      className={`border-t border-ink px-4 py-3 font-mono text-[10px] uppercase leading-relaxed tracking-wider md:px-6 md:py-4 md:text-xs ${className}`}
    >
      {children}
    </div>
  );
}
