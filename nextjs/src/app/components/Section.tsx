"use client";

//top - 50.75

import { useRef, useState, useEffect, MutableRefObject } from "react";
import { useScrollPosition } from "./Main";
import { useSectionContext } from "./hooks/useSection";
import { useIsVisible } from "./hooks/useIsVisible";

interface SectionProps {
  children: React.ReactNode;
  id: string;
  className: string;
}

type SectionStates = "about" | "experience" | "projects";

export function Section({ children, id, className }: SectionProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const scrollPosition = useScrollPosition();
  const { setCurrentSection } = useSectionContext();

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
