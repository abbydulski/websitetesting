import { SubPage } from "../../_components/SubPage";

const blocks = [
  {
    title: "Web Application",
    lead: "Visibility and input for all stakeholders.",
    points: ["Real-time planning", "Tracking", "Analytics"],
  },
  {
    title: "Data Integration",
    lead: "QL-A / B / C / D.",
    points: ["Automated collection", "Analysis", "Handling"],
  },
  {
    title: "Mapping",
    lead: "Data visualization and context.",
    points: ["For excavation", "For trenchless navigation"],
  },
  {
    title: "Physics",
    lead: "Large data set for training and analysis.",
    points: [
      "Signal verification in simulation",
      "Verification in lab",
      "Verification in field",
    ],
  },
];

export default function AyerPage() {
  return (
    <SubPage
      section="Ayer"
      crumbs={[{ label: "Technology" }, { label: "Ayer" }]}
      pageNumber="3.2"
      headline={<>Ayer</>}
      sublabel="Data Platform"
      lead="Field data, planning, mapping, and physics — unified in one platform that all stakeholders can see and shape."
      viewName="panel-ayer"
      back={{ href: "/technology", label: "Technology" }}
    >
      {/* Photo left, 2x2 text grid right — image at natural ratio, text matches height */}
      <div className="grid grid-cols-1 border-b border-ink md:grid-cols-[3fr_2fr]">
        {/* Left — dashboard, locked to native ratio so the full image fits */}
        <div className="relative aspect-[345/219] border-b border-ink md:border-b-0 md:border-r">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/ayer.svg"
            alt="Ayer data platform"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute left-0 right-0 top-0 flex items-center justify-between border-b border-ink bg-paper/85 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.15em] backdrop-blur md:px-6 md:text-xs">
            <span className="font-bold">01 / Platform</span>
            <span className="opacity-60">Dashboard</span>
          </div>
        </div>
        {/* Right — 2x2 grid of text blocks, fills full image height */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2">
          {blocks.map((b, i) => {
            const col = i % 2;
            const row = Math.floor(i / 2);
            const isLast = i === blocks.length - 1;
            const cls = [
              !isLast ? "border-b border-ink md:border-b-0" : "",
              col === 0 ? "md:border-r border-ink" : "",
              row === 0 ? "md:border-b md:border-ink" : "",
            ]
              .filter(Boolean)
              .join(" ");
            return (
              <div
                key={b.title}
                className={`flex flex-col justify-center p-4 md:p-5 ${cls}`}
              >
                <h2 className="font-display text-lg font-black uppercase leading-[0.95] tracking-tight md:text-xl">
                  {b.title}
                </h2>
                <p className="mt-2 font-mono text-xs leading-relaxed">
                  {b.lead}
                </p>
                <ul className="mt-2 flex flex-col gap-0.5 font-mono text-[10px] uppercase tracking-[0.08em] md:text-[11px]">
                  {b.points.map((p) => (
                    <li key={p}>· {p}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </SubPage>
  );
}
