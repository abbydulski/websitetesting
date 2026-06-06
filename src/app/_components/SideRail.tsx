import Link from "next/link";

type IconLink = {
  icon: string;
  href: string;
  label: string;
};

const topIcons: IconLink[] = [
  { icon: "/icons/home.svg", href: "/", label: "Home" },
  { icon: "/icons/map.svg", href: "/services", label: "Services" },
  { icon: "/icons/terminal.svg", href: "/technology", label: "Technology" },
];

const bottomIcons: IconLink[] = [
  { icon: "/icons/pin.svg", href: "/contact", label: "Contact" },
];

type SideRailProps = {
  side: "left" | "right";
  showIcons?: boolean;
};

export function SideRail({ side, showIcons = false }: SideRailProps) {
  return (
    <aside
      className={`hidden md:flex w-12 flex-col items-center ${
        side === "left" ? "border-r" : "border-l"
      } border-ink`}
    >
      <div className="flex h-12 w-full items-center justify-center border-b border-ink">
        {side === "left" ? (
          <Link href="/" aria-label="Advanced Spade Company home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/spade-logo-filled.svg"
              alt="Advanced Spade Company"
              className="h-5 w-auto"
            />
          </Link>
        ) : null}
      </div>
      {showIcons ? (
        <>
          <ul className="flex w-full flex-col items-center gap-2 py-4">
            {topIcons.map((it) => (
              <li key={it.href}>
                <Link
                  href={it.href}
                  aria-label={it.label}
                  title={it.label}
                  className="block p-2 transition-opacity hover:opacity-60"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={it.icon} alt="" className="h-4 w-4" />
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-auto flex w-full flex-col items-center gap-2 py-4">
            {bottomIcons.map((it) => (
              <li key={it.href}>
                <Link
                  href={it.href}
                  aria-label={it.label}
                  title={it.label}
                  className="block p-2 transition-opacity hover:opacity-60"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={it.icon} alt="" className="h-4 w-4" />
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </aside>
  );
}
