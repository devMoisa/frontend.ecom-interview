import Link from "next/link";

interface CustomLinkProps {
  text: string;
  path: string;
  color: string;
  underline: boolean;
  fontSize: string;
}

export const CustomLink = ({
  text,
  path,
  color,
  underline,
  fontSize,
}: CustomLinkProps) => {
  return (
    <Link
      href={path}
      className={`${color} ${fontSize} ${underline && "underline"} hover:underline`}
    >
      {text}
    </Link>
  );
};
