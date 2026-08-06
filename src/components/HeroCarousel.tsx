"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const imgList = [
  "/hero-carousel/carousel-01.webp",
  "/hero-carousel/carousel-02.webp",
];

interface BulletProps {
  active: boolean;
  index: number;
  onClick: () => void;
}

const Bullet = ({ active, index, onClick }: BulletProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Go to slide ${index + 1}`}
      aria-current={active ? "true" : undefined}
      className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
        active ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
      }`}
    />
  );
};

export const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || imgList.length <= 1) return;

    const interval = window.setInterval(() => {
      setCurrent((previous) => (previous + 1) % imgList.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      aria-label="Featured products"
      aria-roledescription="carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative min-w-0 max-w-full overflow-x-hidden"
    >
      {/* Track */}
      <div
        className="flex w-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translate3d(-${current * 100}%, 0, 0)`,
        }}
      >
        {imgList.map((image, index) => (
          <div
            key={image}
            aria-hidden={current !== index}
            className="relative h-65 w-full flex-none sm:h-85 lg:h-115 overflow-y-hidden"
          >
            <Image
              src={image}
              alt={`Featured banner ${index + 1}`}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Bullets */}
      {imgList.length > 1 && (
        <div className="pointer-events-none absolute inset-x-0 bottom-5 z-10 flex justify-center">
          <div className="pointer-events-auto flex items-center gap-2 rounded-full bg-black/20 px-3 py-2 backdrop-blur-sm">
            {imgList.map((image, index) => (
              <Bullet
                key={image}
                index={index}
                active={current === index}
                onClick={() => setCurrent(index)}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
