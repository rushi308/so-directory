import { categories } from "@/data/categories";
import { listings } from "@/data/listings";
import type {
  Category,
  Listing,
  ListingWithCategory,
} from "@/types/directory";

function withCategory(listing: Listing): ListingWithCategory {
  const category = categories.find((c) => c.id === listing.categoryId);
  if (!category) {
    throw new Error(`Missing category for listing ${listing.id}`);
  }
  return { ...listing, category };
}

export function getCategories(): Category[] {
  return categories;
}

/** Categories that currently have at least one listing. */
export function getCategoriesWithListings(): Category[] {
  const usedIds = new Set(listings.map((l) => l.categoryId));
  return categories.filter((c) => usedIds.has(c.id));
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getListings(): ListingWithCategory[] {
  return listings.map(withCategory);
}

export function getListingBySlug(
  slug: string,
): ListingWithCategory | undefined {
  const listing = listings.find((l) => l.slug === slug);
  return listing ? withCategory(listing) : undefined;
}

export function getListingsByCategory(
  categoryId: string,
): ListingWithCategory[] {
  return listings
    .filter((l) => l.categoryId === categoryId)
    .map(withCategory);
}

export function getFeaturedListings(): ListingWithCategory[] {
  return listings.filter((l) => l.featured).map(withCategory);
}

export function searchListings(query: string): ListingWithCategory[] {
  const q = query.trim().toLowerCase();
  if (!q) return getListings();

  return listings
    .filter((listing) => {
      const category = categories.find((c) => c.id === listing.categoryId);
      const haystack = [
        listing.name,
        listing.shortDescription,
        listing.description,
        listing.area,
        listing.tags.join(" "),
        category?.name ?? "",
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    })
    .map(withCategory);
}
