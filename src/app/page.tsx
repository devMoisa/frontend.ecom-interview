import { AnnouncementBar } from "@/components/AnnouncementBar";
import { ProductCategories } from "@/components/Categories";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { HeroCarousel } from "@/components/HeroCarousel";
import { Logo } from "@/components/Logo";
import { Navbar } from "@/components/Navbar";
import { PopularCategories } from "@/components/PopularCategories";
import { ProductGrid } from "@/components/ProductGrid";
import { ShoppingBenefits } from "@/components/ShoppingBenefits";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <AnnouncementBar />
        <Navbar />
        <ProductCategories />
        <HeroCarousel />
        <ShoppingBenefits />
        <PopularCategories />
        <ProductGrid />
      </main>
      <Footer />
    </>
  );
}
