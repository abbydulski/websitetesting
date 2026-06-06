import Link from "next/link";

type Crumb = { label: string; separator?: "//" | "\\\\" };

type PageHeaderProps = {
  crumbs?: Crumb[];
  pageNumber: number | string;
  homeHref?: string;
  back?: { href: string; label: string };
};

export function PageHeader({
  crumbs = [],
  pageNumber,
  homeHref = "/",
  back,
}: PageHeaderProps) {
  return (
    <header className="grid grid-cols-[auto_1fr_auto] items-stretch border-b border-ink font-display text-xs font-bold uppercase tracking-tight md:text-sm">
      <Link
        href={homeHref}
        className="flex items-center gap-2 border-r border-ink px-3 py-3 md:gap-3 md:px-6 md:py-4"
        aria-label="Advanced Spade Company home"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/spade-logo.svg"
          alt=""
          className="h-5 w-auto md:h-6"
        />
        <span className="hidden whitespace-nowrap sm:inline">Advanced Spade Company</span>
        <span className="whitespace-nowrap sm:hidden">ASC</span>
      </Link>
      <div className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 border-r border-ink px-3 py-3 md:flex-nowrap md:px-6 md:py-4">
        {back ? (
          <Link
            href={back.href}
            className="whitespace-nowrap underline-offset-4 hover:underline"
          >
            ← {back.label}
          </Link>
        ) : null}
        {back && crumbs.length > 0 ? (
          <span className="opacity-50">//</span>
        ) : null}
        {crumbs.map((c, i) => (
          <span key={i} className="flex items-center gap-2 whitespace-nowrap">
            {i > 0 ? (
              <span className="opacity-50">
                {crumbs[i - 1]?.separator ?? "//"}
              </span>
            ) : null}
            {c.label}
          </span>
        ))}
      </div>
      <div className="flex items-center px-4 py-3 font-mono md:px-6 md:py-4">
        {String(pageNumber).padStart(2, "0")}
      </div>
    </header>
  );
}
