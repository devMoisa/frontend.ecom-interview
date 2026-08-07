import { Search } from "iconoir-react";
import Image from "next/image";
import { Container } from "./Container";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="border-[0.5px] border-gray-400 border-l-0 border-r-0  px-5">
      <Container>
        <div className="flex w-full items-center justify-between gap-5 py-7">
          <Link href={"/"}>
            <Image
              width={1080}
              height={231}
              src="/logo.png"
              alt="AmazGoogleNetPMorganBay Logo"
              className="h-auto w-28 shrink-0 cursor-pointer object-contain transition hover:opacity-70 md:w-[250px]"
            />
          </Link>
          <div className="relative w-full">
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-neutral-700"
              strokeWidth={2}
            />
            <input
              type="text"
              placeholder="Search for anything"
              className="h-full w-full rounded-full border-2 py-4 pr-4 pl-12 font-semibold placeholder:font-semibold placeholder:text-neutral-600 hover:opacity-70 transition cursor-pointer"
            />
          </div>
          <button className="hidden lg:block py-4 rounded-full min-w-40 font-bold text-white bg-[#0A68F6] hover:opacity-70 transition cursor-pointer">
            Search
          </button>
        </div>
      </Container>
    </div>
  );
};
