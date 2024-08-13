"use client";
import { usePathname } from "next/navigation";
import { PrimaryButton, SidebarButton } from "./Buttons";

interface Path {
  href: string;
  displayText: string;
}

const paths: Path[] = [
  {
    href: "/github",
    displayText: "Github",
  },
  {
    href: "/jobs",
    displayText: "Jobs",
  },
  {
    href: "/week1",
    displayText: "Week1",
  },
  {
    href: "/week2",
    displayText: "Week2",
  },
  {
    href: "/week3",
    displayText: "Week3",
  },
  {
    href: "/week4",
    displayText: "Week4",
  },
  {
    href: "/week5",
    displayText: "Week5",
  },
];

function Sidebar() {
  const pathName = usePathname();
  return (
    <div className="flex flex-col w-full space-y-2 text-white sticky top-10">
      <PrimaryButton
        href={"https://projects.100xdevs.com/"}
        target="_blank"
        className="bg-sky-500 rounded-lg py-2 px-2 shadow-2xl"
      >
        Slides
      </PrimaryButton>

      {paths.map((path, index) => (
        <SidebarButton
          key={index}
          href={path.href}
          className={`rounded-lg py-2 px-2  ${
            pathName === path.href ? "bg-white shadow-2xl text-black" : ""
          }`}
        >
          {path.displayText}
        </SidebarButton>
      ))}
    </div>
  );
}

export default Sidebar;
