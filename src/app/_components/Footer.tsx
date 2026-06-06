export function Footer() {
  return (
    <footer className="mt-auto border-t border-ink">
      <div className="flex items-center gap-3 px-6 py-4 font-mono text-xs uppercase tracking-wide md:px-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/spade-logo-filled.svg"
          alt="Advanced Spade Company"
          className="h-6 w-auto"
        />
        <span className="font-bold">© 2026 Advanced Spade Co</span>
      </div>
    </footer>
  );
}
