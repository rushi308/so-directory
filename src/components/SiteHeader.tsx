import Link from "next/link";

const links = [
  { href: "/", label: "Browse" },
  { href: "/suggest", label: "Suggest" },
];

export function SiteHeader() {
  return (
    <header className="relative z-20 border-b border-ink/10 bg-cream">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="font-display text-lg tracking-tight text-green-900 transition-colors hover:text-green-700 sm:text-xl"
        >
          South Oxhey Directory
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-ink/[0.04] hover:text-green-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
