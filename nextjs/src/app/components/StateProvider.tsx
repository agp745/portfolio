"use client";

import { SectionProvider } from "./hooks/useSection";
import { ScrollProvider } from "./hooks/useScroll";

export function StateProvider({ children }: { children: React.ReactNode }) {
  return (
    <SectionProvider>
      <ScrollProvider>{children}</ScrollProvider>
    </SectionProvider>
  );
}
