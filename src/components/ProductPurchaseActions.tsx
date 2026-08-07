"use client";

import { Cart, Heart, Minus, Plus } from "iconoir-react";
import { useState } from "react";

interface ProductPurchaseActionsProps {
  productName: string;
}

export const ProductPurchaseActions = ({
  productName,
}: ProductPurchaseActionsProps) => {
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [addedQuantity, setAddedQuantity] = useState(0);

  return (
    <div className="mt-7 border-t border-neutral-200 pt-6">
      <div className="flex items-center gap-3">
        <div className="flex h-12 items-center rounded-full border border-neutral-300">
          <button
            type="button"
            onClick={() => setQuantity((current) => Math.max(1, current - 1))}
            disabled={quantity === 1}
            aria-label="Decrease quantity"
            className="flex size-11 cursor-pointer items-center justify-center rounded-full transition hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-35"
          >
            <Minus aria-hidden="true" className="size-4" />
          </button>
          <span className="w-8 text-center text-sm font-semibold" aria-live="polite">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity((current) => Math.min(10, current + 1))}
            disabled={quantity === 10}
            aria-label="Increase quantity"
            className="flex size-11 cursor-pointer items-center justify-center rounded-full transition hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-35"
          >
            <Plus aria-hidden="true" className="size-4" />
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsFavorite((current) => !current)}
          aria-label={`${isFavorite ? "Remove" : "Add"} ${productName} ${isFavorite ? "from" : "to"} favorites`}
          aria-pressed={isFavorite}
          className="flex size-12 shrink-0 cursor-pointer items-center justify-center rounded-full border border-neutral-300 transition hover:bg-neutral-100"
        >
          <Heart
            aria-hidden="true"
            className="size-5"
            fill={isFavorite ? "currentColor" : "none"}
          />
        </button>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => setAddedQuantity((current) => current + quantity)}
          className="flex min-h-13 cursor-pointer items-center justify-center gap-2 rounded-full bg-[#0A68F6] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0757cf]"
        >
          <Cart aria-hidden="true" className="size-5" />
          Add to cart
        </button>
        <button
          type="button"
          className="min-h-13 cursor-pointer rounded-full border-2 border-[#0A68F6] px-6 py-3 text-sm font-semibold text-[#0A68F6] transition hover:bg-blue-50"
        >
          Buy now
        </button>
      </div>

      <p className="mt-3 min-h-5 text-sm font-medium text-emerald-700" aria-live="polite">
        {addedQuantity > 0
          ? `${addedQuantity} ${addedQuantity === 1 ? "item" : "items"} added to your cart.`
          : ""}
      </p>
    </div>
  );
};
