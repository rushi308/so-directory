import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { CategoryNav } from "@/components/CategoryNav";
import {
  HomeListings,
  HomeListingsFallback,
} from "@/components/HomeListings";
import { SearchBar } from "@/components/SearchBar";
import { getCategoriesWithListings } from "@/lib/directory";

type HomeProps = {
  searchParams: Promise<{ q?: string }>;
};

export default function HomePage({ searchParams }: HomeProps) {
  const categories = getCategoriesWithListings();

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero1.jpg"
            alt="Tree canopy and woodland path"
            fill
            priority
            className="animate-fade-in object-cover object-[center_40%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-green-950/90 via-green-950/55 to-green-900/30" />
        </div>
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col justify-end px-5 pb-8 pt-10 sm:px-8 sm:pb-12 sm:pt-14">
          <p className="animate-fade-up font-display text-3xl leading-[1.08] tracking-tight text-cream sm:text-5xl">
            South Oxhey Directory
          </p>
          <p className="animate-fade-up stagger-1 mt-2 max-w-md text-sm leading-relaxed text-cream/90 sm:mt-3 sm:text-base">
            Neighbour recommendations for trades, legal help, events, and
            everyday work around South Oxhey.
          </p>
          <div className="animate-fade-up stagger-2 mt-5 sm:mt-6">
            <SearchBar variant="hero" />
          </div>
          <div className="animate-fade-up stagger-3 mt-3">
            <Link
              href="/suggest"
              className="text-sm font-medium text-cream/85 underline-offset-4 transition hover:text-cream hover:underline"
            >
              Suggest a business
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-16">
          <div className="mb-6">
            <h2 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
              Browse by category
            </h2>
            <p className="mt-1 text-sm text-ink-soft">
              Categories with local listings right now — pick what you need.
            </p>
          </div>
          <CategoryNav categories={categories} />
        </div>
      </section>

      <Suspense fallback={<HomeListingsFallback />}>
        <HomeListings searchParams={searchParams} />
      </Suspense>
    </>
  );
}
