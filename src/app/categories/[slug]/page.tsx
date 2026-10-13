import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CategoryNav } from "@/components/CategoryNav";
import { ListingList } from "@/components/ListingList";
import {
  getCategories,
  getCategoryBySlug,
  getListingsByCategory,
} from "@/lib/directory";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getCategories().map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: "Category" };
  return {
    title: category.name,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const categories = getCategories();
  const listings = getListingsByCategory(category.id);

  return (
    <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
      <p className="text-sm text-stone">
        <Link href="/" className="hover:text-green-800 hover:underline">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span>{category.name}</span>
      </p>
      <h1 className="mt-4 font-display text-4xl tracking-tight text-ink sm:text-5xl">
        {category.name}
      </h1>
      <p className="mt-3 max-w-2xl text-ink-soft">{category.description}</p>

      <div className="mt-10">
        <CategoryNav categories={categories} activeSlug={category.slug} />
      </div>

      <div className="mt-12">
        <p className="mb-4 text-sm text-stone">
          {listings.length} listing{listings.length === 1 ? "" : "s"}
        </p>
        <ListingList
          listings={listings}
          emptyMessage="No listings in this category yet. Suggest a business to get it started."
        />
      </div>
    </div>
  );
}
