import { Panel } from "./Panel";

const primaryTiles = [
  { section: "Services", headline: "Services", href: "/services", page: 1, viewName: "panel-services" },
  { section: "Technology", headline: "Technology", href: "/technology", page: 2, viewName: "panel-technology" },
];

const secondaryTiles = [
  { section: "Careers", headline: "Careers", href: "/careers", page: 3, viewName: "panel-careers" },
  { section: "Contact", headline: "Contact", href: "/contact", page: 4, viewName: "panel-contact" },
];

type SectionBarProps = {
  className?: string;
};

export function SectionBar({ className = "" }: SectionBarProps) {
  return (
    <div className={`flex flex-col bg-paper ${className}`}>
      {primaryTiles.map((t) => (
        <Panel
          key={t.href}
          section={t.section}
          pageNumber={t.page}
          headline={t.headline}
          href={t.href}
          viewName={t.viewName}
          compact
          className="border-b border-ink h-[48px] md:h-[56px]"
        />
      ))}
      <div className="grid grid-cols-2">
        {secondaryTiles.map((t, i) => (
          <Panel
            key={t.href}
            section={t.section}
            pageNumber={t.page}
            headline={t.headline}
            href={t.href}
            viewName={t.viewName}
            compact
            className={`${i === 0 ? "border-r border-ink" : ""} h-[48px] md:h-[56px]`}
          />
        ))}
      </div>
    </div>
  );
}
