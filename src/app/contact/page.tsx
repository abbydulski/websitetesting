import { SubPage } from "../_components/SubPage";

type Card = {
  number: string;
  label: string;
  value: string;
  href: string;
  cta: string;
  borderClass: string;
};

const cards: Card[] = [
  {
    number: "01",
    label: "General",
    value: "INFO@ASPADECO.COM",
    href: "mailto:info@aspadeco.com",
    cta: "→ Open mail",
    borderClass: "border-b border-ink md:border-b-0 md:border-r",
  },
  {
    number: "02",
    label: "Service & Support",
    value: "SERVICE@ASPADECO.COM",
    href: "mailto:service@aspadeco.com",
    cta: "→ Open mail",
    borderClass: "border-b border-ink md:border-b-0 md:border-r",
  },
  {
    number: "03",
    label: "Phone",
    value: "562-737-3416",
    href: "tel:+15627373416",
    cta: "→ Call",
    borderClass: "",
  },
];

export default function ContactPage() {
  return (
    <SubPage
      section="Contact"
      pageNumber={5}
      headline={<>Contact</>}
      sublabel="California + Nevada"
      lead="Get in touch."
      viewName="panel-contact"
    >
      <div className="grid grid-cols-1 border-b border-ink md:grid-cols-3">
        {cards.map((c) => (
          <a
            key={c.value}
            href={c.href}
            className={`group flex min-h-[220px] flex-col gap-4 p-6 transition-colors hover:bg-ink hover:text-paper md:min-h-[280px] md:p-10 ${c.borderClass}`}
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] md:text-xs">
              {c.number} / {c.label}
            </span>
            <span className="font-display text-xl font-black uppercase leading-[1.05] tracking-tight break-words md:text-2xl lg:text-3xl">
              {c.value}
            </span>
            <span className="mt-auto font-mono text-[10px] uppercase tracking-[0.15em] opacity-60 group-hover:opacity-100 md:text-xs">
              {c.cta}
            </span>
          </a>
        ))}
      </div>
    </SubPage>
  );
}
