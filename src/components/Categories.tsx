"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { NavArrowDown } from "iconoir-react";

import { Container } from "./Container";
import { CustomLink } from "./CustomLink";

const categories = [
  "Saved",
  "Electronics",
  "Motors",
  "Fashion",
  "Collectibles and art",
  "Sports",
  "Health and beauty",
  "Industrial equipment",
  "Home and garden",
  "Deals",
  "Sell",
];

export const ProductCategories = () => {
  const navigationRef = useRef<HTMLDivElement>(null);
  const measurementRef = useRef<HTMLDivElement>(null);
  const moreMeasurementRef = useRef<HTMLButtonElement>(null);

  const [visibleCount, setVisibleCount] = useState(categories.length);
  const [isOpen, setIsOpen] = useState(false);

  useLayoutEffect(() => {
    const navigation = navigationRef.current;
    const measurement = measurementRef.current;
    const moreButton = moreMeasurementRef.current;

    if (!navigation || !measurement || !moreButton) return;

    const calculateVisibleItems = () => {
      const availableWidth = navigation.clientWidth;
      const items = Array.from(measurement.children) as HTMLElement[];

      const itemWidths = items.map((item) => item.offsetWidth);
      const moreButtonWidth = moreButton.offsetWidth;

      const gap = 20;
      const totalItemsWidth =
        itemWidths.reduce((total, width) => total + width, 0) +
        gap * Math.max(itemWidths.length - 1, 0);

      if (totalItemsWidth <= availableWidth) {
        setVisibleCount(categories.length);
        setIsOpen(false);
        return;
      }

      let occupiedWidth = moreButtonWidth;
      let count = 0;

      for (const itemWidth of itemWidths) {
        const nextWidth = occupiedWidth + gap + itemWidth;

        if (nextWidth > availableWidth) break;

        occupiedWidth = nextWidth;
        count++;
      }

      setVisibleCount(count);
      setIsOpen(false);
    };

    calculateVisibleItems();

    const resizeObserver = new ResizeObserver(calculateVisibleItems);
    resizeObserver.observe(navigation);

    return () => resizeObserver.disconnect();
  }, []);

  const visibleCategories = categories.slice(0, visibleCount);
  const hiddenCategories = categories.slice(visibleCount);

  return (
    <div className="w-full border-y border-neutral-200">
      <Container className="relative">
        <nav
          ref={navigationRef}
          aria-label="Product categories"
          className="flex w-full items-center gap-5 py-3"
        >
          {visibleCategories.map((category) => (
            <CustomLink
              key={category}
              path="#"
              text={category}
              underline={false}
              color="text-neutral-700"
              fontSize="text-sm"
            />
          ))}

          {hiddenCategories.length > 0 && (
            <div className="relative ml-auto shrink-0">
              <button
                type="button"
                onClick={() => setIsOpen((current) => !current)}
                className="flex cursor-pointer items-center gap-1 text-sm text-neutral-700 hover:text-black"
                aria-expanded={isOpen}
                aria-haspopup="menu"
              >
                More
                <NavArrowDown
                  width={15}
                  height={15}
                  className={`transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div
                  role="menu"
                  className="absolute right-0 top-full z-50 mt-3 min-w-56 rounded-md border border-neutral-200 bg-white py-2 shadow-lg"
                >
                  {hiddenCategories.map((category) => (
                    <div
                      key={category}
                      role="menuitem"
                      className="px-4 py-2 hover:bg-neutral-100"
                    >
                      <CustomLink
                        path="#"
                        text={category}
                        underline={false}
                        color="text-neutral-700"
                        fontSize="text-sm"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </nav>

        {/* Elementos invisíveis usados apenas para medir as larguras */}
        <div
          ref={measurementRef}
          aria-hidden="true"
          className="pointer-events-none absolute invisible flex items-center gap-5 whitespace-nowrap"
        >
          {categories.map((category) => (
            <span key={category} className="text-sm font-medium">
              {category}
            </span>
          ))}
        </div>

        <button
          ref={moreMeasurementRef}
          type="button"
          aria-hidden="true"
          tabIndex={-1}
          className="pointer-events-none absolute invisible flex items-center gap-1 text-sm"
        >
          More
          <NavArrowDown width={15} height={15} />
        </button>
      </Container>
    </div>
  );
};
