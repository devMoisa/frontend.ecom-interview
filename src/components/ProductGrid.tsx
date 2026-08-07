"use client";

import { Heart, NavArrowRight, Star } from "iconoir-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { products } from "@/lib/products";
import { Container } from "./Container";

export const ProductGrid = () => {
  const [favorites, setFavorites] = useState<Set<string>>(() => new Set());

  const toggleFavorite = (productId: string) => {
    setFavorites((current) => {
      const next = new Set(current);

      if (next.has(productId)) {
        next.delete(productId);
      } else {
        next.add(productId);
      }

      return next;
    });
  };

  return (
    <section aria-labelledby="recommended-products-title" className="py-8">
      <Container className="md:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-neutral-500">
              Selected for you
            </p>
            <h2
              id="recommended-products-title"
              className="font-heading mt-1 text-2xl font-semibold tracking-tight text-neutral-950"
            >
              Recommended products
            </h2>
          </div>

          <Link
            href="#"
            className="flex shrink-0 items-center gap-1 text-sm font-semibold text-neutral-700 transition hover:text-neutral-950"
          >
            View all
            <NavArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 lg:grid-cols-4">
          {products.map((product) => {
            const isFavorite = favorites.has(product.id);

            return (
              <article key={product.id} className="group min-w-0">
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#f4f2ef]">
                  <Link
                    href={`/products/${product.id}`}
                    aria-label={`View ${product.name}`}
                    className="absolute inset-0"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </Link>

                  <span className="absolute top-3 left-3 rounded-full bg-amber-400 px-2.5 py-1 text-[11px] font-semibold text-neutral-950 sm:px-3 sm:text-xs">
                    {product.discount}
                  </span>

                  <button
                    type="button"
                    onClick={() => toggleFavorite(product.id)}
                    aria-label={`${isFavorite ? "Remove" : "Add"} ${product.name} ${isFavorite ? "from" : "to"} favorites`}
                    aria-pressed={isFavorite}
                    className="absolute top-3 right-3 flex size-9 cursor-pointer items-center justify-center rounded-full bg-white text-neutral-900 shadow-sm transition hover:scale-105 sm:size-10"
                  >
                    <Heart
                      aria-hidden="true"
                      className="size-5"
                      fill={isFavorite ? "currentColor" : "none"}
                      strokeWidth={1.8}
                    />
                  </button>
                </div>

                <div className="pt-4">
                  <Link
                    href={`/products/${product.id}`}
                    className="line-clamp-2 text-sm leading-5 font-medium text-neutral-900 hover:underline sm:text-base sm:leading-6"
                  >
                    {product.name}
                  </Link>

                  <div className="mt-2 flex items-center gap-1 text-xs sm:text-sm">
                    <Star
                      aria-hidden="true"
                      className="size-4 text-amber-500"
                      fill="currentColor"
                    />
                    <span className="font-semibold text-neutral-800">
                      {product.rating}
                    </span>
                    <span className="text-neutral-500">({product.reviews})</span>
                  </div>

                  <div className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <span className="text-lg font-bold text-neutral-950 sm:text-xl">
                      {product.price}
                    </span>
                    <span className="text-xs text-neutral-500 line-through sm:text-sm">
                      {product.previousPrice}
                    </span>
                  </div>

                  <p className="mt-1 text-xs font-medium text-emerald-700 sm:text-sm">
                    Free shipping
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
