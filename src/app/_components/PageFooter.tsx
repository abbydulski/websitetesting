export function PageFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto grid grid-cols-1 border-t border-ink font-mono uppercase leading-relaxed tracking-[0.15em] md:grid-cols-[1fr_auto_auto]">
      <div className="flex items-center gap-3 border-b border-ink px-4 py-3 text-[10px] md:border-b-0 md:border-r md:px-6 md:py-4 md:text-xs">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/spade-logo.svg" alt="" className="h-4 w-auto" />
        <span className="font-bold">© {year} Advanced Spade Co</span>
      </div>
      <div className="flex items-center border-b border-ink px-4 py-3 text-[9px] opacity-70 md:border-b-0 md:border-r md:px-5 md:py-4 md:text-[10px]">
        California + Nevada
      </div>
      <div className="flex items-center px-4 py-3 text-[9px] opacity-70 md:px-5 md:py-4 md:text-[10px]">
        Made in America 🇺🇸
      </div>
    </footer>
  );
}
