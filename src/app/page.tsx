import { PageHeader } from "./_components/PageHeader";
import { PageFooter } from "./_components/PageFooter";
import { Tile } from "./_components/Tile";

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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col border-l border-ink bg-paper text-ink">
      <PageHeader crumbs={[{ label: "Home" }]} pageNumber={1} />

      {/* Hero — tagline up top, blurb at the bottom; dominates first viewport */}
      <section className="flex min-h-[55vh] flex-col justify-between border-b border-ink px-6 py-8 md:min-h-[60vh] md:px-12 md:py-12">
        <h1 className="font-display text-[clamp(2rem,10vw,10rem)] font-black uppercase leading-[0.85] tracking-[-0.03em]">
          Proven
          <br />
          Underground.
        </h1>
        <p className="max-w-2xl font-mono text-[clamp(0.8125rem,1.4vw,1.0625rem)] uppercase leading-relaxed tracking-[0.06em] md:tracking-[0.12em]">
          The overhead grid is failing. Advanced Spade Company builds precision
          tools and intelligent systems for underground utility detection,
          mapping, and drilling.
        </p>
      </section>

      {/* Section tiles — primary nav, equal width strip */}
      <div className="grid grid-cols-2 md:grid-cols-4">
        <Tile
          section="Services"
          pageNumber={2}
          title="Services"
          body="Maps. Damage prevention. Trenchless construction."
          href="/services"
          viewName="panel-services"
          icon="/icons/map.svg"
          className="border-r border-t border-ink min-h-[180px] md:min-h-[220px]"
        />
        <Tile
          section="Technology"
          pageNumber={3}
          title="Technology"
          body="Hardware and software for underground work."
          href="/technology"
          viewName="panel-technology"
          icon="/icons/terminal.svg"
          className="border-t border-ink min-h-[180px] md:min-h-[220px] md:border-r"
        />
        <Tile
          section="Careers"
          pageNumber={4}
          title="Careers"
          body="Build something that matters underground."
          href="/careers"
          viewName="panel-careers"
          icon="/icons/search.svg"
          className="border-r border-t border-ink min-h-[180px] md:min-h-[220px]"
        />
        <Tile
          section="Contact"
          pageNumber={5}
          title="Contact"
          body="California + Nevada. Let's talk."
          href="/contact"
          viewName="panel-contact"
          icon="/icons/pin.svg"
          className="border-t border-ink min-h-[180px] md:min-h-[220px]"
        />
      </div>

      {/* Field Signal — editorial evidence for the thesis */}
      <section className="border-t border-ink">
        <div className="flex items-center justify-between border-b border-ink px-6 py-2 font-mono text-[10px] uppercase tracking-[0.15em] md:px-12 md:text-xs">
          <span className="font-bold">Field Signal</span>
          <span className="opacity-60">Evidence / The Case for Underground</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {articles.map((a, i) => (
            <a
              key={a.headline}
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col gap-4 p-6 transition-colors hover:bg-ink hover:text-paper md:p-10 ${
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
      </section>

      <PageFooter />
    </main>
  );
}
