"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/hero-carousel/carousel-01.webp",
    alt: "Friends enjoying a sunny day in the city",
    title: "Get more with an AmazGooNetfPMorganBay account",
    description:
      "Enjoy exclusive benefits, special deals, app-only coupons, and more.",
    cta: "Sign in",
    href: "#",
  },
  {
    image: "/hero-carousel/carousel-02.webp",
    alt: "Woman listening to music at home",
    title: "Don’t miss out on insider perks",
    description:
      "What are you waiting for? Make the most of your account benefits.",
    cta: "Sign in",
    href: "#",
  },
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
    if (isPaused || slides.length <= 1) return;

    const interval = window.setInterval(() => {
      setCurrent((previous) => (previous + 1) % slides.length);
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
      <div
        className="flex w-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translate3d(-${current * 100}%, 0, 0)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            aria-hidden={current !== index}
            className="relative h-65 w-full flex-none overflow-y-hidden sm:h-85 lg:h-115"
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 z-10 bg-linear-to-r from-black/75 via-black/35 to-black/5" />

            <div className="absolute inset-0 z-20 flex items-center">
              <div className="mx-auto w-full max-w-300 px-6 sm:px-10 lg:px-16">
                <div className="max-w-[320px] text-white sm:max-w-md lg:max-w-xl">
                  <h2 className="font-heading text-2xl leading-tight font-semibold tracking-tight sm:text-3xl lg:text-5xl">
                    {slide.title}
                  </h2>
                  <p className="mt-3 max-w-lg text-sm leading-5 font-medium text-white/90 sm:mt-4 sm:text-base sm:leading-6">
                    {slide.description}
                  </p>
                  <Link
                    href={slide.href}
                    tabIndex={current === index ? 0 : -1}
                    className="mt-5 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-neutral-950 transition hover:bg-white/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:mt-6 sm:px-6 sm:py-3 sm:text-base"
                  >
                    {slide.cta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {slides.length > 1 && (
        <div className="pointer-events-none absolute inset-x-0 bottom-5 z-10 flex justify-center">
          <div className="pointer-events-auto flex items-center gap-2 rounded-full bg-black/20 px-3 py-2 backdrop-blur-sm">
            {slides.map((slide, index) => (
              <Bullet
                key={slide.image}
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
