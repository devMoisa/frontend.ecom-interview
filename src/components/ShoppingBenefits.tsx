import {
  Community,
  CreditCard,
  DeliveryTruck,
  Percentage,
} from "iconoir-react";
import Link from "next/link";

import { Container } from "./Container";

const benefits = [
  {
    icon: Percentage,
    title: "First purchase?",
    description: "Get 15% off today.",
    linkLabel: "Learn more",
    href: "#",
  },
  {
    icon: DeliveryTruck,
    title: "Up to 100% off shipping",
    description: "Use code devMoisa.",
    linkLabel: "View rules",
    href: "#",
  },
  {
    icon: CreditCard,
    title: "Pay in up to 6 installments",
    description: "Interest-free with your card.",
    linkLabel: "Learn more",
    href: "#",
  },
  {
    icon: Community,
    title: "Shop with trusted sellers",
    description: "Explore exclusive conditions.",
    linkLabel: "Learn more",
    href: "#",
  },
];

export const ShoppingBenefits = () => {
  return (
    <section aria-label="Shopping benefits" className="py-6">
      <Container>
        <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white lg:grid lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className="flex min-h-22 items-center gap-3 border-b border-neutral-200 px-4 py-4 last:border-b-0 lg:border-r lg:border-b-0 lg:last:border-r-0"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-950">
                  <Icon aria-hidden="true" className="size-5" strokeWidth={2} />
                </span>

                <div className="min-w-0">
                  <h3 className="text-sm leading-5 font-semibold text-neutral-950">
                    {benefit.title}
                  </h3>
                  <p className="text-xs leading-5 text-neutral-600">
                    {benefit.description}{" "}
                    <Link
                      href={benefit.href}
                      className="whitespace-nowrap text-neutral-700 underline underline-offset-2 transition hover:text-neutral-950"
                    >
                      {benefit.linkLabel}
                    </Link>
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
