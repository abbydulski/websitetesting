import { SubPage } from "../_components/SubPage";

type Article = {
  number: string;
  outlet: string;
  date: string;
  headline: string;
  excerpt: string;
  tag: string;
  href: string;
};

const articles: Article[] = [
  {
    number: "01",
    outlet: "CBS Sacramento",
    date: "Jun 8, 2026",
    headline:
      "PG&E says Northern California power shutoffs expected to continue Thursday",
    excerpt:
      "PG&E cut power to nearly 5,000 customers across 8 Northern California counties — a public-safety shutoff to keep overhead lines from sparking wildfires in red-flag wind conditions.",
    tag: "The Overhead Grid is Failing",
    href: "https://www.cbsnews.com/sacramento/news/pg-e-public-safety-power-shutoffs-june-wind-red-flag-warning/",
  },
  {
    number: "02",
    outlet: "Boyle Heights Beat",
    date: "Jun 9, 2026",
    headline:
      "Company tied to East LA oil spill says pipeline was improperly marked",
    excerpt:
      "HP Communications alleges the pipeline operator failed to properly mark the line's location before excavation — leading to a strike and crude-oil spill onto East LA streets.",
    tag: "Why We Mark + Verify",
    href: "https://thelalocal.org/neighborhoods/east-la/east-la-oil-spill-pipeline-markings/",
  },
];

export default function NewsPage() {
  return (
    <SubPage
      section="The Problem"
      pageNumber={6}
      headline={<>The Problem</>}
      sublabel="Evidence / The Case for Underground"
      lead="The overhead grid is failing. The underground is mismarked. We track the field reports that prove why this work matters."
      viewName="panel-news"
    >
      {/* Banner strip — fixed 140px on mobile (object-cover), native ratio at md+ */}
      <div className="w-full border-b border-ink">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/news.png"
          alt=""
          className="block h-[140px] w-full object-cover md:h-auto"
        />
      </div>
      <div className="grid grid-cols-1 border-b border-ink md:grid-cols-2">
        {articles.map((a, i) => (
          <a
            key={a.headline}
            href={a.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex min-h-[320px] flex-col gap-4 px-6 pb-6 pt-4 transition-colors hover:bg-ink hover:text-paper md:min-h-[420px] md:px-10 md:pb-10 md:pt-5 ${
              i === 0
                ? "border-b border-ink md:border-b-0 md:border-r"
                : ""
            }`}
          >
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.15em] md:text-xs">
              <span className="font-bold">
                {a.number} / {a.outlet}
              </span>
              <span className="opacity-60">{a.date}</span>
            </div>
            <h3 className="font-display text-xl font-black uppercase leading-[0.95] tracking-tight md:text-2xl lg:text-3xl">
              {a.headline}
            </h3>
            <p className="font-mono text-xs leading-relaxed md:text-sm">
              {a.excerpt}
            </p>
            <span className="font-display text-xs font-bold uppercase tracking-tight md:text-sm">
              [ {a.tag} ]
            </span>
            <span className="mt-auto font-mono text-[10px] uppercase tracking-[0.15em] opacity-60 group-hover:opacity-100 md:text-xs">
              → Read more about the problem
            </span>
          </a>
        ))}
      </div>
    </SubPage>
  );
}
