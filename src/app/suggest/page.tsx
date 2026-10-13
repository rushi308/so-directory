import type { Metadata } from "next";
import { SUGGEST_SHEET_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Suggest a business",
  description:
    "Recommend a trusted local business for the South Oxhey Directory via our shared sheet.",
};

export default function SuggestPage() {
  return (
    <div className="mx-auto max-w-xl px-5 py-12 sm:px-8 sm:py-16">
      <h1 className="font-display text-4xl tracking-tight text-ink sm:text-5xl">
        Suggest a business
      </h1>
      <p className="mt-3 text-ink-soft">
        Know a reliable electrician, solicitor, photographer, or other local
        help? Add them to the shared South Oxhey Directory sheet — we’ll review
        entries and bring them onto the site.
      </p>
      <a
        href={SUGGEST_SHEET_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center justify-center rounded-lg bg-green-800 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-green-700 hover:text-white"
      >
        Open suggestion sheet
      </a>
      <p className="mt-4 text-sm text-stone">
        Opens Google Sheets in a new tab. Make sure the sheet is shared so
        neighbours can edit (or use a linked Google Form).
      </p>
    </div>
  );
}
