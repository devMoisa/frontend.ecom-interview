import { Search } from "iconoir-react";
import { Container } from "./Container";
import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="border-[0.5px] border-gray-400">
      <Container>
        <div className="w-full py-7 flex justify-between gap-5">
          <Image
            width={250}
            height={250}
            src="/logo.png"
            alt="AmazGoogleNetPMorganBay Logo"
            className="hover:opacity-70 transition cursor-pointer"
          />
          <div className="relative w-full">
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-neutral-700"
              strokeWidth={2}
            />
            <input
              type="text"
              placeholder="Search for anything"
              className="h-full w-full rounded-full border-2 py-2 pr-4 pl-12 font-semibold placeholder:font-semibold placeholder:text-neutral-600 hover:opacity-70 transition cursor-pointer"
            />
          </div>
          <button className="rounded-full min-w-40 font-bold text-white bg-[#0A68F6] hover:opacity-70 transition cursor-pointer">
            Search
          </button>
        </div>
      </Container>
    </div>
  );
};
