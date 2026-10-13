"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

type SearchBarProps = {
  initialQuery?: string;
  variant?: "hero" | "inline";
};

export function SearchBar({
  initialQuery = "",
  variant = "inline",
}: SearchBarProps) {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = query.trim();
    const href = trimmed
      ? `/?q=${encodeURIComponent(trimmed)}#listings`
      : "/#listings";
    router.push(href);
  }

  const isHero = variant === "hero";

  return (
    <form
      onSubmit={onSubmit}
      className={`flex w-full ${isHero ? "max-w-xl flex-col gap-2 sm:flex-row sm:gap-3" : "max-w-lg gap-2"}`}
      role="search"
    >
      <label className="sr-only" htmlFor="directory-search">
        Search local services
      </label>
      <input
        id="directory-search"
        type="search"
        name="q"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Electrician, photographer, solicitor…"
        className={`min-w-0 flex-1 border border-green-900/15 bg-cream/95 text-ink outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-600/20 ${
          isHero
            ? "rounded-lg px-3.5 py-3 text-sm shadow-sm sm:px-4 sm:py-3 sm:text-base"
            : "rounded-md px-3 py-2.5 text-sm"
        }`}
      />
      <button
        type="submit"
        className={`shrink-0 bg-green-800 font-medium text-white transition hover:bg-green-700 active:bg-green-900 ${
          isHero
            ? "rounded-lg px-5 py-3 text-sm sm:px-6 sm:text-base"
            : "rounded-md px-4 py-2.5 text-sm"
        }`}
      >
        Search
      </button>
    </form>
  );
}
