"use client";

import { SectionProvider } from "./hooks/useSection";

export function StateProvider({ children }: { children: React.ReactNode }) {
  return <SectionProvider>{children}</SectionProvider>;
}
