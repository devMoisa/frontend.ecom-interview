import { Facebook, Instagram, Youtube } from "iconoir-react";
import Link from "next/link";

import { Container } from "./Container";

const linkGroups = [
  {
    title: "Shop",
    links: ["Electronics", "Fashion", "Home & Garden", "Deals"],
  },
  {
    title: "Help & support",
    links: ["Help center", "Track your order", "Returns", "Contact us"],
  },
  {
    title: "About",
    links: ["Our story", "Careers", "Sustainability", "Newsroom"],
  },
];

const socialLinks = [
  { label: "Instagram", icon: Instagram },
  { label: "Facebook", icon: Facebook },
  { label: "YouTube", icon: Youtube },
];

export const Footer = () => {
  return (
    <footer className="mt-8 bg-[#0A68F6] text-white rounded-tl-4xl rounded-tr-4xl">
      <Container className="md:px-6">
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_repeat(3,1fr)] lg:gap-12 lg:py-16">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="#"
              className="font-heading text-2xl font-semibold tracking-tight"
            >
              AmazGooNetFPMorganBay
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/75">
              Everything you love, all in one place. Discover great products,
              trusted sellers, and deals made for you.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    className="flex size-10 items-center justify-center rounded-full border border-white/25 text-white transition hover:border-white hover:bg-white hover:text-[#0A68F6]"
                  >
                    <Icon aria-hidden="true" className="size-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {linkGroups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="font-heading text-sm font-semibold tracking-wide">
                {group.title}
              </h2>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-white/75 transition hover:text-white hover:underline"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-white/20 py-6 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 AmazGooNetFPMorganBay. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="#" className="transition hover:text-white">
              Privacy
            </Link>
            <Link href="#" className="transition hover:text-white">
              Terms
            </Link>
            <Link href="#" className="transition hover:text-white">
              Accessibility
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
