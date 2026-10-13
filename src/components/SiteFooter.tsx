import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="relative z-10 mt-auto border-t border-green-900/10 bg-green-950 text-green-100">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-xl text-cream">South Oxhey Directory</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-green-100/75">
            Neighbour-recommended services for day-to-day life and local events
            in South Oxhey, Watford.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 sm:items-end">
          <div className="flex gap-4 text-sm">
            <Link
              href="/"
              className="text-green-100/80 transition-colors hover:text-cream"
            >
              Browse
            </Link>
            <Link
              href="/suggest"
              className="text-green-100/80 transition-colors hover:text-cream"
            >
              Suggest a business
            </Link>
          </div>
          <p className="text-sm text-green-100/60">
            Made with love, Rushi
          </p>
        </div>
      </div>
    </footer>
  );
}
