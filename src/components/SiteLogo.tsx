import Link from "next/link";

type SiteLogoProps = {
  /** Pass `null` to render as plain text (no link). Defaults to `/`. */
  href?: string | null;
  /** Light wordmark for dark backgrounds (footer). */
  variant?: "default" | "onDark";
  className?: string;
};

function DirectoryMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="40" height="40" rx="9" fill="currentColor" />
      {/* Open directory / book */}
      <path
        d="M11 10.5h7.2c1.4 0 2.5.9 2.8 2.1.3-1.2 1.4-2.1 2.8-2.1H31v18.2c0 .7-.5 1.2-1.2 1.2h-6.3c-1.5 0-2.7-1-2.7-2.3V15.2c0-.7-.5-1.2-1.2-1.2h-.2c-.7 0-1.2.5-1.2 1.2v12.4c0 1.3-1.2 2.3-2.7 2.3H12.2c-.7 0-1.2-.5-1.2-1.2V10.5Z"
        fill="#f7f4ef"
        fillOpacity="0.22"
      />
      <path
        d="M12.5 12h6c.8 0 1.5.7 1.5 1.5v13.2c0 .5-.5.9-1.1.9H13.4c-.5 0-.9-.4-.9-.9V12.8c0-.4.4-.8.9-.8Z"
        fill="#f7f4ef"
      />
      <path
        d="M20 13.5h6c.5 0 .9.4.9.9v12.2c0 .5-.4.9-.9.9H21.1c-.6 0-1.1-.4-1.1-.9V13.5Z"
        fill="#f7f4ef"
        fillOpacity="0.85"
      />
      <path
        d="M14 16h3.2M14 18.8h3.2M14 21.6h2.4M21.8 16.5h3.4M21.8 19.3h3.4M21.8 22.1h2.6"
        stroke="#1a3a2a"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SiteLogo({
  href = "/",
  variant = "default",
  className = "",
}: SiteLogoProps) {
  const onDark = variant === "onDark";

  const content = (
    <>
      <DirectoryMark className="size-8 shrink-0 text-green-900 sm:size-9" />
      <span
        className={`font-display tracking-tight ${
          onDark
            ? "text-cream"
            : "text-green-900 transition-colors group-hover:text-green-700"
        } text-lg sm:text-xl`}
      >
        South Oxhey Directory
      </span>
    </>
  );

  if (href !== null) {
    return (
      <Link
        href={href}
        className={`group inline-flex items-center gap-2.5 ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {content}
    </span>
  );
}
