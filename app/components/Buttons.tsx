"use client";
import Link from "next/link";

export const SidebarButton = ({
  children,
  href,
  className,
  target = "",
}: {
  children: React.ReactNode;
  href: string;
  className: string;
  target?: string;
}) => {
  return (
    <Link
      href={href}
      target={target}
      className={`rounded-lg py-2 px-2 ${className}`}
    >
      {children}
    </Link>
  );
};

export const PrimaryButton = ({
  children,
  href = "",
  className,
  target = "",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  target?: string;
}) => {
  return (
    <Link
      href={href}
      target={target}
      className={`bg-gradient-to-r from-sky-700 to-sky-500 rounded-lg py-2 px-2 shadow-2xl ${className}`}
    >
      {children}
    </Link>
  );
};

export const SecondaryButton = ({
  children,
  href = "",
  className,
  target = "",
  onClick = () => {},
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  target?: string;
  onClick?: (e?: any) => void;
}) => {
  return (
    <Link
      href={href}
      target={target}
      className={`bg-gradient-to-r from-indigo-800 to-indigo-500 rounded-lg py-2 px-2 shadow-2xl text-white ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};
