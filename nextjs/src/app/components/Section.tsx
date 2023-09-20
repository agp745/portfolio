"use client";

import { useRef, useEffect } from "react";
import { useScrollPosition } from "./hooks/useScrollPosition";
import { useSectionContext } from "./hooks/useSection";
import { useScrollContext } from "./hooks/useScroll";

interface SectionProps {
  children: React.ReactNode;
  id: string;
  className: string;
}

type SectionStates = "about" | "experience" | "projects";

export function Section({ children, id, className }: SectionProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollPosition } = useScrollPosition();
  const { setCurrentSection } = useSectionContext();
  const { section } = useScrollContext();

  useEffect(() => {
    if (sectionRef.current) {
      if (sectionRef.current.id === section) {
        sectionRef.current.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  }, [section]);

  useEffect(() => {
    if (sectionRef.current) {
      const top = sectionRef.current.getBoundingClientRect().top;
      if (top <= 100 && top >= -150) {
        setCurrentSection(sectionRef.current.id as SectionStates);
      }
    }
  }, [scrollPosition, setCurrentSection]);

  return (
    <div id={id} className={className} ref={sectionRef}>
      {children}
    </div>
  );
}
