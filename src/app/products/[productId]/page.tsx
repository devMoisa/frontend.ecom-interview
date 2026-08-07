import {
  CheckCircle,
  DeliveryTruck,
  NavArrowRight,
  Package,
  RefreshDouble,
  ShieldCheck,
  Star,
} from "iconoir-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AnnouncementBar } from "@/components/AnnouncementBar";
import { ProductCategories } from "@/components/Categories";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ProductPurchaseActions } from "@/components/ProductPurchaseActions";
import { ShoppingBenefits } from "@/components/ShoppingBenefits";
import { getProductById, products } from "@/lib/products";

interface ProductPageProps {
  params: Promise<{ productId: string }>;
}

export const dynamicParams = false;

export const generateStaticParams = () =>
  products.map((product) => ({ productId: product.id }));

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { productId } = await params;
  const product = getProductById(productId);

  if (!product) return {};

  return {
    title: `${product.name} | AmazGooNetFPMorganBay`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { productId } = await params;
  const product = getProductById(productId);

  if (!product) notFound();

  return (
    <>
      <main className="flex-1">
        <AnnouncementBar />
        <Navbar />
        <ProductCategories />

        <Container className="md:px-6">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 py-5 text-xs text-neutral-500 sm:text-sm"
          >
            <Link href="/" className="transition hover:text-neutral-950 hover:underline">
              Home
            </Link>
            <NavArrowRight aria-hidden="true" className="size-4" />
            <Link href="#" className="transition hover:text-neutral-950 hover:underline">
              {product.category}
            </Link>
            <NavArrowRight aria-hidden="true" className="size-4" />
            <span className="max-w-48 truncate font-medium text-neutral-800 sm:max-w-none">
              {product.name}
            </span>
          </nav>

          <section className="grid gap-8 pb-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(380px,0.95fr)] lg:gap-14 lg:pb-16">
            <div>
              <div className="relative aspect-square overflow-hidden rounded-3xl bg-[#f4f2ef]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover"
                />
                <span className="absolute top-5 left-5 rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-neutral-950">
                  {product.discount}
                </span>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  { icon: DeliveryTruck, label: "Free shipping" },
                  { icon: RefreshDouble, label: "30-day returns" },
                  { icon: ShieldCheck, label: "Buyer protection" },
                ].map((benefit) => {
                  const Icon = benefit.icon;

                  return (
                    <div
                      key={benefit.label}
                      className="flex flex-col items-center gap-2 rounded-2xl border border-neutral-200 p-3 text-center text-xs font-medium text-neutral-700 sm:flex-row sm:justify-center sm:text-left"
                    >
                      <Icon aria-hidden="true" className="size-5 shrink-0" />
                      {benefit.label}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:pt-2">
              <p className="text-sm font-semibold tracking-wide text-[#0A68F6] uppercase">
                {product.category}
              </p>
              <h1 className="mt-2 text-3xl leading-tight font-semibold tracking-tight text-neutral-950 sm:text-4xl">
                {product.name}
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
                <span className="flex items-center gap-1 font-semibold text-neutral-900">
                  <Star
                    aria-hidden="true"
                    className="size-5 text-amber-500"
                    fill="currentColor"
                  />
                  {product.rating}
                </span>
                <span className="text-neutral-400">•</span>
                <Link href="#reviews" className="text-neutral-600 underline underline-offset-2">
                  {product.reviews} reviews
                </Link>
                <span className="text-neutral-400">•</span>
                <span className="font-medium text-emerald-700">In stock</span>
              </div>

              <div className="mt-6 flex flex-wrap items-baseline gap-3">
                <span className="text-4xl font-bold tracking-tight text-neutral-950">
                  {product.price}
                </span>
                <span className="text-lg text-neutral-400 line-through">
                  {product.previousPrice}
                </span>
              </div>
              <p className="mt-2 text-sm text-neutral-600">
                Or pay in up to 6 interest-free installments.
              </p>

              <p className="mt-7 text-base leading-7 text-neutral-700">
                {product.description}
              </p>

              <ul className="mt-6 space-y-3">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-neutral-700">
                    <CheckCircle
                      aria-hidden="true"
                      className="size-5 shrink-0 text-emerald-600"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <ProductPurchaseActions
                productName={product.name}
              />

              <div className="mt-4 flex items-start gap-3 rounded-2xl bg-neutral-100 p-4">
                <Package aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-neutral-900">
                    Sold by TopChoice Store
                  </p>
                  <p className="mt-1 text-xs leading-5 text-neutral-600">
                    98.9% positive feedback · More than 10,000 items sold
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Container>

        <ShoppingBenefits />
      </main>
      <Footer />
    </>
  );
}
