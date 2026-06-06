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
      {/* Photo left, text right — image sized to its native ratio, text column matches */}
      <div className="grid grid-cols-1 border-b border-ink md:grid-cols-2">
        {/* Left — dashboard, aspect-locked to the SVG (345×219) */}
        <div className="relative border-b border-ink md:border-b-0 md:border-r">
          <div className="aspect-[345/219] w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/ayer.svg"
              alt="Ayer data platform"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute left-0 right-0 top-0 flex items-center justify-between border-b border-ink bg-paper/85 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.15em] backdrop-blur md:px-6 md:text-xs">
            <span className="font-bold">01 / Platform</span>
            <span className="opacity-60">Dashboard</span>
          </div>
        </div>
        {/* Right — text blocks distribute to match the image height */}
        <div className="flex flex-col">
          {blocks.map((b, i) => (
            <div
              key={b.title}
              className={`flex flex-1 flex-col justify-center p-4 md:p-6 ${
                i < blocks.length - 1 ? "border-b border-ink" : ""
              }`}
            >
              <h2 className="font-display text-xl font-black uppercase leading-[0.95] tracking-tight md:text-2xl">
                {b.title}
              </h2>
              <p className="mt-2 font-mono text-xs leading-relaxed md:text-sm">
                {b.lead}
              </p>
              <ul className="mt-2 flex flex-col gap-0.5 font-mono text-[11px] uppercase tracking-[0.08em] md:text-xs md:tracking-wider">
                {b.points.map((p) => (
                  <li key={p}>· {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SubPage>
  );
}
