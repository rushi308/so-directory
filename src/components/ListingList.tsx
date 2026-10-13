import { ListingCard } from "@/components/ListingCard";
import type { ListingWithCategory } from "@/types/directory";

type ListingListProps = {
  listings: ListingWithCategory[];
  emptyMessage?: string;
};

export function ListingList({
  listings,
  emptyMessage = "No listings match that search yet. Try another term or suggest a business.",
}: ListingListProps) {
  if (listings.length === 0) {
    return (
      <p className="rounded-lg border border-dashed border-ink/15 bg-cream px-5 py-10 text-center text-ink-soft">
        {emptyMessage}
      </p>
    );
  }

  return (
    <div className="listing-stagger divide-y-0">
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
}
