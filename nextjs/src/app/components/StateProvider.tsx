"use client";

import { SectionProvider } from "./hooks/useSection";
import { ScrollProvider } from "./hooks/useScroll";
import { ScrollPositionProvider } from "./hooks/useScrollPosition";

export function StateProvider({ children }: { children: React.ReactNode }) {
  return (
    <SectionProvider>
      <ScrollPositionProvider>
        <ScrollProvider>{children}</ScrollProvider>
      </ScrollPositionProvider>
    </SectionProvider>
  );
}
