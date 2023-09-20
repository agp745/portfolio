"use client";

import { useSectionContext } from "../hooks/useSection";
import { useScrollContext } from "../hooks/useScroll";
import { SpaceTop } from "../Space";
import { cn } from "@/utils/cn";
import { DotFilledIcon } from "@radix-ui/react-icons";

interface DesktopHeadersProps {
  className: string;
}

export function DesktopHeaders({ className }: DesktopHeadersProps) {
  const { currentSection } = useSectionContext();

  const { setSection } = useScrollContext();

  const handleClick = (sectionID: "about" | "experience" | "projects") => {
    setSection(sectionID);
  };

  return (
    <div className={cn("tracking-wider text-lg", className)}>
      <button
        onClick={() => handleClick("about")}
        className="flex items-center w-fit transition"
      >
        <DotFilledIcon
          className={cn("transition", {
            block: currentSection === "about",
            "translate-y-9": currentSection === "experience",
            "translate-y-[72px]": currentSection === "projects",
          })}
        />
        <div
          className={cn("transition translate-x-0", {
            "translate-x-2 font-normal": currentSection === "about",
            "-translate-x-3": currentSection !== "about",
          })}
        >
          about
        </div>
      </button>
      <button
        onClick={() => handleClick("experience")}
        className="flex items-center w-fit transition"
      >
        <DotFilledIcon
          className={cn("hidden transition", {
            "block opacity-0": currentSection === "experience",
          })}
        />
        <div
          className={cn("transition", {
            "translate-x-2 font-normal": currentSection === "experience",
          })}
        >
          experience
        </div>
      </button>
      <button
        onClick={() => handleClick("projects")}
        className="flex items-center w-fit transition"
      >
        <DotFilledIcon
          className={cn("hidden transition", {
            "block opacity-0": currentSection === "projects",
          })}
        />
        <div
          className={cn("transition", {
            "translate-x-2 font-normal": currentSection === "projects",
          })}
        >
          projects
        </div>
      </button>

      <SpaceTop size={10} />
      <a href="/SoftwareResume.pdf" target="_blank" className="w-fit">
        resume
      </a>
    </div>
  );
}
