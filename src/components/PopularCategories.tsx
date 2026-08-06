"use client";

import { NavArrowLeft, NavArrowRight, Plus } from "iconoir-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

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
  const carouselRef = useRef<HTMLUListElement>(null);
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(true);

  const updateControls = useCallback(() => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const firstItem = carousel.querySelector("li");
    const minScrollLeft = firstItem?.offsetLeft ?? 0;
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

    setCanScrollBack(carousel.scrollLeft > minScrollLeft + 2);
    setCanScrollForward(carousel.scrollLeft < maxScrollLeft - 2);
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    updateControls();

    const resizeObserver = new ResizeObserver(updateControls);
    resizeObserver.observe(carousel);

    return () => resizeObserver.disconnect();
  }, [updateControls]);

  const moveCarousel = (direction: -1 | 1) => {
    const carousel = carouselRef.current;
    const firstItem = carousel?.querySelector("li");

    if (!carousel || !firstItem) return;

    carousel.scrollBy({
      left: direction * (firstItem.offsetWidth + 16),
      behavior: "smooth",
    });
  };

  return (
    <section aria-labelledby="popular-categories-title" className="py-8">
      <Container className="md:px-6">
        <div className="flex items-center justify-between gap-4">
          <h2
            id="popular-categories-title"
            className="font-heading text-2xl font-semibold tracking-tight text-neutral-950"
          >
            Popular categories
          </h2>

          <div className="flex shrink-0 items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => moveCarousel(-1)}
              disabled={!canScrollBack}
              aria-label="Previous categories"
              aria-controls="popular-categories-carousel"
              className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-neutral-300 text-neutral-800 transition hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-35"
            >
              <NavArrowLeft aria-hidden="true" className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => moveCarousel(1)}
              disabled={!canScrollForward}
              aria-label="Next categories"
              aria-controls="popular-categories-carousel"
              className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-neutral-300 text-neutral-800 transition hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-35"
            >
              <NavArrowRight aria-hidden="true" className="size-5" />
            </button>
          </div>
        </div>

        <ul
          ref={carouselRef}
          id="popular-categories-carousel"
          onScroll={updateControls}
          aria-label="Popular category slides"
          className="-mx-4 mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-3 md:px-0 lg:grid-cols-6 [&::-webkit-scrollbar]:hidden"
        >
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
