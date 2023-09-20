"use client";

import { useRef } from "react";

import { useScrollPosition } from "./hooks/useScrollPosition";

interface MainSectionProps {
  children: React.ReactNode;
  className: string;
}

export function Main({ children, className }: MainSectionProps) {
  const { setScrollPosition } = useScrollPosition();

  const mainRef = useRef<HTMLElement | null>(null);

  const handleScroll = () => {
    if (mainRef.current) {
      setScrollPosition(mainRef.current.scrollTop);
    }
  };

  return (
    <section ref={mainRef} onScroll={handleScroll} className={className}>
      {children}
    </section>
  );
}
