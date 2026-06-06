"use client";

import Link from "next/link";

type BackLinkProps = {
  className?: string;
  children: React.ReactNode;
  href?: string;
};

export function BackLink({ className, children, href = "/" }: BackLinkProps) {
  return (
    <Link
      href={href}
      transitionTypes={["zoom-out"]}
      scroll={false}
      className={className}
    >
      {children}
    </Link>
  );
}
