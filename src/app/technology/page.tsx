import { SubPage } from "../_components/SubPage";
import { Tile } from "../_components/Tile";

export default function TechnologyPage() {
  return (
    <SubPage
      section="Technology"
      pageNumber={3}
      headline={<>Technology</>}
      sublabel="Hardware + Software for underground work"
      lead="A connected stack — purpose-built sensors, field hardware, and a data platform that turns subsurface signals into decisions."
      viewName="panel-technology"
    >
      <div className="grid grid-cols-1 border-b border-ink md:grid-cols-2">
        <Tile
          section="CRKT"
          pageNumber="3.1"
          title="CRKT"
          sublabel="Handheld Locator"
          body="Software-defined sensor. Modular antenna array. Real-time tuning."
          href="/technology/crkt"
          viewName="panel-crkt"
          className="border-b border-ink md:border-r md:border-b min-h-[260px] md:min-h-[320px]"
        />
        <Tile
          section="Ayer"
          pageNumber="3.2"
          title="Ayer"
          sublabel="Data Platform"
          body="Web application. Mapping. Physics-backed analysis."
          href="/technology/ayer"
          viewName="panel-ayer"
          className="border-b border-ink md:border-b min-h-[260px] md:min-h-[320px]"
        />
        <Tile
          section="SQID"
          pageNumber="—"
          title="SQID"
          sublabel="Sensor Platform"
          body="In development."
          comingSoon
          className="border-b border-ink md:border-r md:border-b-0 min-h-[260px] md:min-h-[320px]"
        />
        <Tile
          section="CRBK"
          pageNumber="—"
          title="CRBK"
          sublabel="Field System"
          body="In development."
          comingSoon
          className="min-h-[260px] md:min-h-[320px]"
        />
      </div>
    </SubPage>
  );
}
