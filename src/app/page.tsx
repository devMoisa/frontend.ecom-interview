import { AnnouncementBar } from "@/components/AnnouncementBar";
import { ProductCategories } from "@/components/Categories";
import { HeroCarousel } from "@/components/HeroCarousel";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex-1">
      <AnnouncementBar />
      <Navbar />
      <ProductCategories />
      <HeroCarousel />
    </main>
  );
}
