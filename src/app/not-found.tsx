import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-start px-5 py-24 sm:px-8">
      <h1 className="font-display text-4xl text-ink">Page not found</h1>
      <p className="mt-3 text-ink-soft">
        That listing or category isn’t in the directory.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-green-800 px-5 py-3 text-sm font-medium text-white transition hover:bg-green-700"
      >
        Back to browse
      </Link>
    </div>
  );
}
