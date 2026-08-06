"use client";

import { Bell, Cart, NavArrowDown } from "iconoir-react";
import { useRef, useState } from "react";

import { useResponsiveItems } from "@/hooks/useResponsiveItems";
import { Container } from "./Container";
import { CustomLink } from "./CustomLink";

interface LinkItem {
  name: string;
  path: string;
}

interface InternalButtonProps {
  icon: React.ReactElement;
  onClick?: () => void;
}

const links: {
  left: LinkItem[];
  right: LinkItem[];
} = {
  left: [
    {
      name: "Make Contact",
      path: "#",
    },
    {
      name: "About Architecture",
      path: "#",
    },
  ],
  right: [
    {
      name: "Resume",
      path: "#",
    },
  ],
};

const InternalButton = ({ icon, onClick }: InternalButtonProps) => {
  return (
    <button
      type="button"
      className="cursor-pointer transition hover:opacity-30"
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

interface MoreMenuProps {
  items: LinkItem[];
  isOpen: boolean;
  onToggle: () => void;
}

const MoreMenu = ({ items, isOpen, onToggle }: MoreMenuProps) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className="relative shrink-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        className="flex cursor-pointer items-center gap-1 font-medium hover:underline"
      >
        More
        <NavArrowDown
          width={14}
          height={14}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div
          role="menu"
          className="absolute right-0 top-full z-50 mt-3 min-w-52 rounded-md border border-neutral-200 bg-white py-2 shadow-lg"
        >
          {items.map((item) => (
            <div
              key={item.name}
              role="menuitem"
              className="px-4 py-2 hover:bg-neutral-100"
            >
              <CustomLink
                path={item.path}
                text={item.name}
                underline={false}
                color="text-black"
                fontSize="font-medium"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const AnnouncementBar = () => {
  const leftContainerRef = useRef<HTMLDivElement>(null);
  const leftMeasureRef = useRef<HTMLDivElement>(null);
  const leftMoreRef = useRef<HTMLButtonElement>(null);

  const rightContainerRef = useRef<HTMLDivElement>(null);
  const rightMeasureRef = useRef<HTMLDivElement>(null);
  const rightMoreRef = useRef<HTMLButtonElement>(null);

  const [leftMenuOpen, setLeftMenuOpen] = useState(false);
  const [rightMenuOpen, setRightMenuOpen] = useState(false);

  const { visible: visibleLeftLinks, hidden: hiddenLeftLinks } =
    useResponsiveItems(
      links.left,
      leftContainerRef,
      leftMeasureRef,
      leftMoreRef,
    );

  const { visible: visibleRightLinks, hidden: hiddenRightLinks } =
    useResponsiveItems(
      links.right,
      rightContainerRef,
      rightMeasureRef,
      rightMoreRef,
    );

  return (
    <Container className="relative py-3 text-sm  px-5">
      <div className="flex w-full items-center justify-between gap-5">
        <div className="flex min-w-0 flex-1 items-center gap-5">
          <h5 className="shrink-0 whitespace-nowrap">
            Hi!{" "}
            <CustomLink
              path="#"
              text="Sign in"
              underline
              color="text-blue-600"
              fontSize="font-medium"
            />{" "}
            <span>or</span>{" "}
            <CustomLink
              path="#"
              text="register"
              underline
              color="text-blue-600"
              fontSize="font-medium"
            />
          </h5>

          <div
            ref={leftContainerRef}
            className="flex min-w-0 flex-1 items-center gap-2 whitespace-nowrap"
          >
            {visibleLeftLinks.map((item) => (
              <CustomLink
                key={item.name}
                path={item.path}
                text={item.name}
                underline={false}
                color="text-black"
                fontSize="font-medium"
              />
            ))}

            <MoreMenu
              items={hiddenLeftLinks}
              isOpen={leftMenuOpen}
              onToggle={() => setLeftMenuOpen((current) => !current)}
            />
          </div>
        </div>

        <div className="flex min-w-0 items-center gap-5">
          <div
            ref={rightContainerRef}
            className="flex min-w-0 items-center gap-2 whitespace-nowrap"
          >
            {visibleRightLinks.map((item) => (
              <CustomLink
                key={item.name}
                path={item.path}
                text={item.name}
                underline={false}
                color="text-black"
                fontSize="font-medium"
              />
            ))}

            <MoreMenu
              items={hiddenRightLinks}
              isOpen={rightMenuOpen}
              onToggle={() => setRightMenuOpen((current) => !current)}
            />
          </div>

          <InternalButton
            onClick={() => window.alert("Hello")}
            icon={<Bell fontSize={16} />}
          />

          <InternalButton icon={<Cart fontSize={16} />} />
        </div>
      </div>

      <div
        ref={leftMeasureRef}
        aria-hidden="true"
        className="pointer-events-none absolute invisible flex items-center gap-2 whitespace-nowrap"
      >
        {links.left.map((item) => (
          <span key={item.name} className="font-medium">
            {item.name}
          </span>
        ))}
      </div>

      <button
        ref={leftMoreRef}
        type="button"
        tabIndex={-1}
        aria-hidden="true"
        className="pointer-events-none absolute invisible flex items-center gap-1 font-medium"
      >
        More
        <NavArrowDown width={14} height={14} />
      </button>

      <div
        ref={rightMeasureRef}
        aria-hidden="true"
        className="pointer-events-none absolute invisible flex items-center gap-2 whitespace-nowrap"
      >
        {links.right.map((item) => (
          <span key={item.name} className="font-medium">
            {item.name}
          </span>
        ))}
      </div>

      <button
        ref={rightMoreRef}
        type="button"
        tabIndex={-1}
        aria-hidden="true"
        className="pointer-events-none absolute invisible flex items-center gap-1 font-medium"
      >
        More
        <NavArrowDown width={14} height={14} />
      </button>
    </Container>
  );
};
