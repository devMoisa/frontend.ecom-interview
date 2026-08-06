"use client";

import { Bell, Cart } from "iconoir-react";
import Link from "next/link";
import { Container } from "./Container";

interface InternalLinkProps {
  text: string;
  path: string;
  color: string;
  underline: boolean;
}

interface InternalButton {
  icon: React.ReactElement;
  onClick?: () => void;
}

const InternalLink = ({ text, path, color, underline }: InternalLinkProps) => {
  return (
    <Link
      href={path}
      className={`${color} font-medium ${underline && "underline"} hover:underline`}
    >
      {text}
    </Link>
  );
};

const InternalButton = ({ icon, onClick }: InternalButton) => {
  return (
    <button
      className="cursor-pointer hover:opacity-30 transition"
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export const AnnouncementBar = () => {
  const links = {
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
      {
        name: "",
        path: "#",
      },
    ],
  };

  return (
    <Container className="py-3 text-sm">
      <div className="w-full flex justify-between items-center">
        <div className="left flex gap-5">
          <h5>
            Hi!{" "}
            <InternalLink
              path="#"
              text="Sign in"
              underline={true}
              color="text-blue-600"
            />{" "}
            <span>or</span>{" "}
            <InternalLink
              path="#"
              text="register"
              underline={true}
              color="text-blue-600"
            />
          </h5>
          <div className="flex gap-2">
            {links.left.map((item, index) => {
              return (
                <InternalLink
                  key={index}
                  path={item.path}
                  text={item.name}
                  underline={false}
                  color="text-black"
                />
              );
            })}
          </div>
        </div>
        <div className="right flex gap-5">
          {links.right.map((item, index) => {
            return (
              <InternalLink
                key={index}
                path={item.path}
                text={item.name}
                underline={false}
                color="text-black"
              />
            );
          })}
          <InternalButton
            onClick={() => window.alert("Hello")}
            icon={<Bell fontSize={16} />}
          />
          <InternalButton icon={<Cart fontSize={16} />} />
        </div>
      </div>
    </Container>
  );
};
