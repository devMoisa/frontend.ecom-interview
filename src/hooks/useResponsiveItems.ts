"use client";

import { useLayoutEffect, useState } from "react";

export const useResponsiveItems = <T>(
  items: T[],
  containerRef: React.RefObject<HTMLElement | null>,
  measureRef: React.RefObject<HTMLElement | null>,
  moreRef: React.RefObject<HTMLElement | null>,
) => {
  const [visibleCount, setVisibleCount] = useState(items.length);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const measure = measureRef.current;
    const more = moreRef.current;

    if (!container || !measure || !more) return;

    const calculate = () => {
      const available = container.clientWidth;

      const widths = Array.from(measure.children).map(
        (el) => (el as HTMLElement).offsetWidth,
      );

      const gap = 12;
      const moreWidth = more.offsetWidth;

      let occupied = moreWidth;
      let count = 0;

      for (const width of widths) {
        if (occupied + width + gap > available) break;

        occupied += width + gap;
        count++;
      }

      setVisibleCount(count >= items.length ? items.length : count);
    };

    calculate();

    const observer = new ResizeObserver(calculate);
    observer.observe(container);

    return () => observer.disconnect();
  }, [items]);

  return {
    visible: items.slice(0, visibleCount),
    hidden: items.slice(visibleCount),
  };
};
