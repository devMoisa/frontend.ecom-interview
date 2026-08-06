import { AnnouncementBar } from "@/components/AnnouncementBar";
import { ProductCategories } from "@/components/Categories";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex-1">
      <AnnouncementBar />
      <Navbar />
      <ProductCategories />
    </main>
  );
}
