import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getListingBySlug,
  getListings,
} from "@/lib/directory";

type ListingPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getListings().map((listing) => ({ slug: listing.slug }));
}

export async function generateMetadata({
  params,
}: ListingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const listing = getListingBySlug(slug);
  if (!listing) return { title: "Listing" };
  return {
    title: listing.name,
    description: listing.shortDescription,
  };
}

function ContactLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-lg bg-green-800 px-5 py-3 text-sm font-medium text-white transition hover:bg-green-700 hover:text-white"
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {label}
    </a>
  );
}

export default async function ListingPage({ params }: ListingPageProps) {
  const { slug } = await params;
  const listing = getListingBySlug(slug);
  if (!listing) notFound();

  const whatsappHref = listing.whatsapp
    ? `https://wa.me/${listing.whatsapp.replace(/\D/g, "")}`
    : undefined;

  return (
    <article className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
      <p className="text-sm text-stone">
        <Link href="/" className="hover:text-green-800 hover:underline">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link
          href={`/categories/${listing.category.slug}`}
          className="hover:text-green-800 hover:underline"
        >
          {listing.category.name}
        </Link>
      </p>

      <h1 className="mt-4 font-display text-4xl tracking-tight text-ink sm:text-5xl">
        {listing.name}
      </h1>
      <p className="mt-3 text-lg text-ink-soft">{listing.shortDescription}</p>

      <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
        <div>
          <dt className="text-stone">Category</dt>
          <dd className="mt-0.5 font-medium text-green-800">
            <Link
              href={`/categories/${listing.category.slug}`}
              className="hover:underline"
            >
              {listing.category.name}
            </Link>
          </dd>
        </div>
        <div>
          <dt className="text-stone">Area</dt>
          <dd className="mt-0.5 font-medium text-ink">{listing.area}</dd>
        </div>
      </dl>

      <div className="mt-10 space-y-4 text-base leading-relaxed text-ink-soft">
        {listing.description.split("\n").map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {listing.tags.length > 0 ? (
        <ul className="mt-8 flex flex-wrap gap-2">
          {listing.tags.map((tag) => (
            <li
              key={tag}
              className="text-xs uppercase tracking-wide text-stone"
            >
              {tag}
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-10 flex flex-wrap gap-3">
        {listing.phone ? (
          <ContactLink href={`tel:${listing.phone.replace(/\s/g, "")}`} label="Call" />
        ) : null}
        {whatsappHref ? (
          <ContactLink href={whatsappHref} label="WhatsApp" />
        ) : null}
        {listing.email ? (
          <ContactLink href={`mailto:${listing.email}`} label="Email" />
        ) : null}
        {listing.website ? (
          <ContactLink href={listing.website} label="Website" />
        ) : null}
      </div>
    </article>
  );
}
