import { SubPage } from "../_components/SubPage";

type Offering = { name: string; description: string };
type Block = {
  number: string;
  title: string;
  body: string;
  offerings: Offering[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    /** Optional CSS transform to crop edges, paired with bottom-right transform-origin */
    crop?: { scale: number; origin?: string; translateY?: string };
  };
};

const blocks: Block[] = [
  {
    number: "01",
    title: "Underground Utility Maps",
    body: "Accurate subsurface maps are the foundation of safe, efficient underground work. We produce survey-grade deliverables built for engineering, design, and construction planning — not just field reference.",
    offerings: [
      {
        name: "Survey-Grade / Stamped Maps",
        description:
          "Legally defensible, stamped deliverables suitable for permitting, design, and record documentation.",
      },
      {
        name: "Engineering / Design / Planning",
        description:
          "Subsurface data formatted and delivered to support engineering workflows and project planning from concept through construction.",
      },
    ],
    image: {
      src: "/underground-utility-maps.svg",
      alt: "Underground utility maps",
      width: 532,
      height: 312,
      crop: { scale: 1.06, origin: "bottom right", translateY: "-3%" },
    },
  },
  {
    number: "02",
    title: "Damage Prevention",
    body: "Striking an underground utility is expensive, dangerous, and avoidable. We provide the field verification and ongoing map maintenance to keep projects moving without incident.",
    offerings: [
      {
        name: "Field Mark & Verify",
        description:
          "On-site utility marking and verification. Accurate locates, documented and defensible.",
      },
      {
        name: "Map Generation & Maintenance",
        description:
          "We build and maintain subsurface utility records over time, so your data doesn't go stale between projects.",
      },
    ],
    image: {
      src: "/damage-prevention.svg",
      alt: "Damage prevention",
      width: 471,
      height: 313,
    },
  },
  {
    number: "03",
    title: "Trenchless Construction",
    body: "Trenching is slow and expensive. We support trenchless utility installation — a faster, lower-impact path to getting lines underground. This is where our technology advantage is most direct: precise pre-bore data means fewer surprises underground.",
    offerings: [
      {
        name: "Utility Installation",
        description:
          "Trenchless placement of new lines, guided by precise subsurface data — faster, with less site impact than open-trench methods.",
      },
    ],
    image: {
      src: "/trenchless-construction.svg",
      alt: "Trenchless construction",
      width: 528,
      height: 312,
    },
  },
];

export default function ServicesPage() {
  return (
    <SubPage
      section="Services"
      pageNumber={2}
      headline={<>Services</>}
      sublabel="Maps · Damage Prevention · Trenchless Construction"
      lead="Underground utility detection, mapping, and trenchless construction — delivered as one continuous workflow."
      viewName="panel-services"
    >
      <div className="flex flex-col">
        {blocks.map((b, i) => {
          const flipped = i % 2 === 1;
          const isLast = i === blocks.length - 1;
          const imageCell = (
            <div
              key="image"
              className={`relative w-full overflow-hidden border-b border-ink md:border-b-0 ${
                flipped ? "" : "md:border-r"
              }`}
              style={{ aspectRatio: `${b.image.width} / ${b.image.height}` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={b.image.src}
                alt={b.image.alt}
                className="absolute inset-0 h-full w-full object-cover"
                style={
                  b.image.crop
                    ? {
                        transform: `scale(${b.image.crop.scale})${
                          b.image.crop.translateY
                            ? ` translateY(${b.image.crop.translateY})`
                            : ""
                        }`,
                        transformOrigin: b.image.crop.origin ?? "bottom right",
                      }
                    : undefined
                }
              />
            </div>
          );
          const headerCell = (
            <div
              key="header"
              className={`flex flex-col p-6 md:p-10 ${
                flipped ? "md:border-r border-ink" : ""
              }`}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] md:text-xs">
                {b.number} / Service
              </span>
              <h2 className="mt-3 font-display text-2xl font-black uppercase leading-[0.95] tracking-tight md:text-4xl">
                {b.title}
              </h2>
              <p className="mt-5 max-w-prose font-mono text-sm leading-relaxed">
                {b.body}
              </p>
            </div>
          );
          return (
            <section
              key={b.title}
              className={`flex flex-col ${isLast ? "" : "border-b border-ink"}`}
            >
              {/* Hero row — small image + header */}
              <div className="grid grid-cols-1 border-b border-ink md:grid-cols-[2fr_3fr]">
                {flipped ? (
                  <>
                    {headerCell}
                    {imageCell}
                  </>
                ) : (
                  <>
                    {imageCell}
                    {headerCell}
                  </>
                )}
              </div>
              {/* Offerings row — full-width, tied to the service above */}
              <div className="flex items-center justify-between border-b border-ink px-6 py-2 font-mono text-[10px] uppercase tracking-[0.15em] md:px-10 md:text-xs">
                <span className="font-bold">Offerings</span>
                <span className="opacity-60">Service {b.number}</span>
              </div>
              <div
                className="grid grid-cols-1"
                style={{
                  gridTemplateColumns: `repeat(${Math.max(
                    b.offerings.length,
                    1,
                  )}, minmax(0, 1fr))`,
                }}
              >
                {b.offerings.map((o, j) => (
                  <div
                    key={o.name}
                    className={`flex flex-col gap-1 p-6 md:p-8 ${
                      j < b.offerings.length - 1
                        ? "border-b border-ink md:border-b-0 md:border-r"
                        : ""
                    }`}
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] opacity-60 md:text-xs">
                      / {String(j + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-1 font-display text-sm font-bold uppercase tracking-tight md:text-base">
                      {o.name}
                    </span>
                    <span className="font-mono text-xs leading-relaxed">
                      {o.description}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </SubPage>
  );
}
