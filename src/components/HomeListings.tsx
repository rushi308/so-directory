import { ListingList } from "@/components/ListingList";
import {
  getFeaturedListings,
  searchListings,
} from "@/lib/directory";

type HomeListingsProps = {
  searchParams: Promise<{ q?: string }>;
};

export async function HomeListings({ searchParams }: HomeListingsProps) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";
  const listings = query ? searchListings(query) : getFeaturedListings();
  const allResults = searchListings("");

  return (
    <section id="listings" className="scroll-mt-8 bg-cream">
      <div className="mx-auto max-w-5xl px-5 pb-20 sm:px-8">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
              {query ? `Results for “${query}”` : "Featured locally"}
            </h2>
            <p className="mt-1 text-sm text-ink-soft">
              {query
                ? `${listings.length} listing${listings.length === 1 ? "" : "s"} found`
                : "A starting set of trusted neighbourhood picks."}
            </p>
          </div>
          {!query ? (
            <p className="text-sm text-stone">
              Showing {listings.length} of {allResults.length}
            </p>
          ) : null}
        </div>
        <ListingList
          listings={listings}
          emptyMessage="Nothing matched that search. Try “plumber”, “photo”, or suggest someone new."
        />
        {!query ? (
          <div className="mt-10 border-t border-ink/10 pt-10">
            <h3 className="font-display text-xl text-ink">All listings</h3>
            <p className="mt-1 mb-6 text-sm text-ink-soft">
              Full directory — search above to narrow it down.
            </p>
            <ListingList listings={allResults} />
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function HomeListingsFallback() {
  return (
    <section id="listings" className="scroll-mt-8 bg-cream">
      <div className="mx-auto max-w-5xl px-5 pb-20 sm:px-8">
        <div className="mb-6 h-16 animate-pulse rounded-md bg-ink/5" />
        <div className="space-y-4">
          <div className="h-20 animate-pulse rounded-md bg-ink/5" />
          <div className="h-20 animate-pulse rounded-md bg-ink/5" />
          <div className="h-20 animate-pulse rounded-md bg-ink/5" />
        </div>
      </div>
    </section>
  );
}
