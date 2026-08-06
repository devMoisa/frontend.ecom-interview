import { Plus } from "iconoir-react";
import Link from "next/link";

import { Container } from "./Container";

const categories = [
  {
    label: "Electronics",
    highlight: "Tech deals",
    href: "#",
    circleClass: "border-neutral-200 bg-neutral-100 text-neutral-500",
  },
  {
    label: "Fashion",
    highlight: "Trending now",
    href: "#",
    circleClass: "border-neutral-200 bg-neutral-100 text-neutral-500",
  },
  {
    label: "Collectibles & Art",
    highlight: "Rare finds",
    href: "#",
    circleClass: "border-amber-400 bg-amber-400 text-neutral-950",
  },
  {
    label: "Sports",
    highlight: "Sports essentials",
    href: "#",
    circleClass: "border-neutral-200 bg-neutral-100 text-neutral-500",
  },
  {
    label: "Home & Garden",
    highlight: "Home favorites",
    href: "#",
    circleClass: "border-neutral-950 bg-neutral-950 text-white",
  },
];

export const PopularCategories = () => {
  return (
    <section aria-labelledby="popular-categories-title" className="py-8">
      <Container className="md:px-6">
        <h2
          id="popular-categories-title"
          className="font-heading text-2xl font-semibold tracking-tight text-neutral-950"
        >
          Popular categories
        </h2>

        <ul className="-mx-4 mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-3 md:px-0 lg:grid-cols-6 [&::-webkit-scrollbar]:hidden">
          {categories.map((category) => (
            <li key={category.label} className="w-40 shrink-0 snap-start md:w-auto">
              <Link
                href={category.href}
                className="group flex flex-col items-center text-center"
              >
                <span
                  className={`flex aspect-square w-full max-w-44 items-center justify-center rounded-full border px-5 text-[11px] leading-4 font-semibold tracking-[0.12em] uppercase transition-transform duration-300 group-hover:-translate-y-1 ${category.circleClass}`}
                >
                  {category.highlight}
                </span>
                <span className="mt-3 text-sm leading-5 font-medium text-neutral-800 group-hover:underline">
                  {category.label}
                </span>
              </Link>
            </li>
          ))}

          <li className="w-40 shrink-0 snap-start md:w-auto">
            <Link
              href="#"
              className="group flex flex-col items-center text-center"
              aria-label="View all categories"
            >
              <span className="flex aspect-square w-full max-w-44 items-center justify-center rounded-full border border-neutral-200 bg-neutral-100 text-neutral-600 transition-colors group-hover:bg-neutral-200 group-hover:text-neutral-950">
                <Plus aria-hidden="true" className="size-9" strokeWidth={1.5} />
              </span>
              <span className="mt-3 text-sm leading-5 font-medium text-neutral-800 group-hover:underline">
                View all
              </span>
            </Link>
          </li>
        </ul>
      </Container>
    </section>
  );
};
