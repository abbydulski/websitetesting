import { SubPage } from "../_components/SubPage";

const APPLY_URL =
  "https://app.dover.com/Advanced%20Spade%20Company/careers/18f70f9c-bfa5-471b-80fb-e693ce578a79";

export default function CareersPage() {
  return (
    <SubPage
      section="Careers"
      pageNumber={4}
      headline={<>Careers</>}
      sublabel="Build something that matters underground"
      lead="Join the team building the next generation of underground utility detection, mapping, and drilling technology."
      viewName="panel-careers"
    >
      <div className="px-6 py-10 md:px-12 md:py-14">
        <a
          href={APPLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-2 border border-ink bg-ink px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-paper transition-colors hover:bg-paper hover:text-ink"
        >
          View open roles →
        </a>
      </div>
    </SubPage>
  );
}
