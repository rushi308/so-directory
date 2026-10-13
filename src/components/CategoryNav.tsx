import Link from "next/link";
import type { Category } from "@/types/directory";

type CategoryNavProps = {
  categories: Category[];
  activeSlug?: string;
};

export function CategoryNav({ categories, activeSlug }: CategoryNavProps) {
  return (
    <nav aria-label="Categories" className="overflow-x-auto pb-1">
      <ul className="flex min-w-max gap-2 sm:flex-wrap sm:min-w-0">
        {categories.map((category) => {
          const active = category.slug === activeSlug;
          return (
            <li key={category.id}>
              <Link
                href={`/categories/${category.slug}`}
                className={`inline-block rounded-md px-3 py-2 text-sm transition-all duration-200 ${
                  active
                    ? "bg-green-800 text-white"
                    : "bg-transparent text-ink-soft underline-offset-4 hover:bg-ink/[0.04] hover:text-green-900 hover:underline"
                }`}
              >
                {category.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
