import { ViewTransition, type ReactNode } from "react";
import { PageHeader } from "./PageHeader";
import { PageFooter } from "./PageFooter";

type Crumb = { label: string };

type SubPageProps = {
  section: string;
  crumbs?: Crumb[];
  pageNumber: number | string;
  headline: ReactNode;
  sublabel?: string;
  lead?: ReactNode;
  viewName?: string;
  back?: { href: string; label: string };
  children?: ReactNode;
};

export function SubPage({
  section,
  crumbs,
  pageNumber,
  headline,
  sublabel,
  lead,
  viewName,
  back = { href: "/", label: "Home" },
  children,
}: SubPageProps) {
  const effectiveCrumbs: Crumb[] = crumbs ?? [{ label: section }];

  const article = (
    <article className="flex min-h-screen flex-col border-l border-ink bg-paper text-ink">
      <PageHeader
        crumbs={effectiveCrumbs}
        pageNumber={pageNumber}
        back={back}
      />
      <section className="border-b border-ink px-4 py-8 md:px-12 md:py-16">
        <h1 className="font-display text-[clamp(2.25rem,8vw,7rem)] font-black uppercase leading-[0.88] tracking-[-0.02em]">
          {headline}
        </h1>
        {sublabel ? (
          <p className="mt-3 font-display text-sm font-bold uppercase tracking-tight md:text-xl">
            [{sublabel}]
          </p>
        ) : null}
        {lead ? (
          <p className="mt-6 max-w-2xl font-mono text-[13px] uppercase leading-relaxed tracking-[0.06em] md:mt-8 md:text-sm md:tracking-[0.1em]">
            {lead}
          </p>
        ) : null}
      </section>
      {children ? <div className="flex-1">{children}</div> : <div className="flex-1" />}
      <PageFooter />
    </article>
  );

  return viewName ? (
    <ViewTransition name={viewName} share="morph">
      {article}
    </ViewTransition>
  ) : (
    article
  );
}
