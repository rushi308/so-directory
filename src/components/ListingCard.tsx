import Link from "next/link";
import type { ListingWithCategory } from "@/types/directory";

type ListingCardProps = {
  listing: ListingWithCategory;
};

export function ListingCard({ listing }: ListingCardProps) {
  return (
    <Link
      href={`/listings/${listing.slug}`}
      className="group block border-b border-ink/10 py-5 transition-colors first:pt-0 last:border-b-0 hover:bg-ink/[0.03] sm:px-2"
    >
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <div className="min-w-0">
          <h3 className="font-display text-xl tracking-tight text-ink transition-colors group-hover:text-green-800">
            {listing.name}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-ink-soft">
            {listing.shortDescription}
          </p>
        </div>
        <div className="mt-2 flex shrink-0 items-center gap-3 text-xs uppercase tracking-wide text-stone sm:mt-0 sm:flex-col sm:items-end sm:gap-1">
          <span className="text-green-700">{listing.category.name}</span>
          <span>{listing.area}</span>
        </div>
      </div>
    </Link>
  );
}
