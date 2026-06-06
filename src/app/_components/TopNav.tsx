import Link from "next/link";

export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Technology", href: "/technology" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export function TopNav({ className = "" }: { className?: string }) {
  return (
    <nav className={`flex flex-wrap gap-x-6 gap-y-2 ${className}`}>
      {navLinks.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          className="font-bold underline-offset-4 hover:underline"
        >
          {l.label}
        </Link>
      ))}
    </nav>
  );
}
