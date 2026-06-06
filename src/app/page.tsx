import { PageHeader } from "./_components/PageHeader";
import { PageFooter } from "./_components/PageFooter";
import { Tile } from "./_components/Tile";

export default function Home() {
  return (
    <main className="flex h-screen flex-col overflow-hidden bg-paper text-ink">
      <PageHeader crumbs={[{ label: "Home" }]} pageNumber={1} />

      {/* Hero — tagline up top, blurb at the bottom */}
      <section className="flex flex-1 flex-col justify-between border-b border-ink px-6 py-8 md:px-12 md:py-12">
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

      <PageFooter />
    </main>
  );
}
