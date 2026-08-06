import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex-1">
      <AnnouncementBar />
      <Navbar />
    </main>
  );
}
