import { SubPage } from "../../_components/SubPage";

const blocks = [
  {
    title: "User Device",
    lead: "Application runs on any user device.",
    points: [],
  },
  {
    title: "Software Defined Sensor",
    lead: "Firmware updates for performance upgrades and expanded capabilities.",
    points: [],
  },
  {
    title: "Modular Array",
    lead: "Application-specific antennas.",
    points: ["Performance upgrades", "Function expansion"],
  },
  {
    title: "Antennas",
    lead: "Real-time tuning.",
    points: ["High Q", "High sensitivity"],
  },
];

export default function CrktPage() {
  return (
    <SubPage
      section="CRKT"
      crumbs={[{ label: "Technology" }, { label: "CRKT" }]}
      pageNumber="3.1"
      headline={<>CRKT</>}
      sublabel="Handheld Utility Locator"
      lead="A software-defined locator built for the field. Modular antennas, real-time tuning, and over-the-air upgrades that turn one device into many."
      viewName="panel-crkt"
      back={{ href: "/technology", label: "Technology" }}
    >
      {/* Hero — asymmetric editorial composition */}
      <div className="grid grid-cols-1 border-b border-ink md:grid-cols-12">
        {/* 01 / Hardware — the tall handheld device */}
        <div className="relative flex flex-col border-b border-ink md:col-span-5 md:border-b-0 md:border-r">
          <div className="flex items-center justify-between border-b border-ink px-4 py-2 font-mono text-[10px] uppercase tracking-[0.15em] md:px-6 md:text-xs">
            <span className="font-bold">01 / Hardware</span>
            <span className="opacity-60">Handheld</span>
          </div>
          <div className="flex flex-1 items-center justify-center p-8 md:p-12 min-h-[420px] md:min-h-[640px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/crkt.svg"
              alt="CRKT handheld utility locator"
              className="max-h-[520px] max-w-full object-contain"
            />
          </div>
        </div>
        {/* 02 / Software — the landscape phone mockup */}
        <div className="flex flex-col md:col-span-7">
          <div className="flex items-center justify-between border-b border-ink px-4 py-2 font-mono text-[10px] uppercase tracking-[0.15em] md:px-6 md:text-xs">
            <span className="font-bold">02 / Software</span>
            <span className="opacity-60">Companion App</span>
          </div>
          <div className="flex flex-1 items-center justify-center p-6 md:p-10 min-h-[420px] md:min-h-[640px]">
            <div className="relative w-full max-w-[560px]">
              {/* Landscape phone bezel */}
              <div className="relative aspect-[19/9] w-full rounded-[2rem] border-[10px] border-ink bg-paper shadow-[0_12px_40px_-12px_rgba(0,0,0,0.35)]">
                {/* Side notch (right edge, simulating rotated phone) */}
                <div className="absolute right-0 top-1/2 z-10 h-20 w-4 -translate-y-1/2 rounded-l-xl bg-ink" />
                {/* Screen */}
                <div className="relative h-full w-full overflow-hidden rounded-[1.25rem] bg-paper">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/mobile-crkt.svg"
                    alt="CRKT mobile application"
                    className="absolute inset-0 h-full w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 border-b border-ink md:grid-cols-2">
        {blocks.map((b, i) => {
          const isLeftCol = i % 2 === 0;
          const isTopRow = i < 2;
          const cls = [
            isLeftCol ? "md:border-r border-ink" : "",
            isTopRow ? "border-b border-ink" : "",
            !isTopRow && i === 2 ? "border-b border-ink md:border-b-0" : "",
          ]
            .filter(Boolean)
            .join(" ");
          return (
            <div key={b.title} className={`${cls} p-6 md:p-10`}>
              <h2 className="font-display text-3xl font-black uppercase leading-[0.95] tracking-tight md:text-5xl">
                {b.title}
              </h2>
              <p className="mt-6 font-mono text-sm leading-relaxed">
                {b.lead}
              </p>
              {b.points.length > 0 ? (
                <ul className="mt-4 flex flex-col gap-1 font-mono text-xs uppercase tracking-wider">
                  {b.points.map((p) => (
                    <li key={p}>· {p}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          );
        })}
      </div>
    </SubPage>
  );
}
