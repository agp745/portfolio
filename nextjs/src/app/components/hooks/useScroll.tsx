"use client";

import { createContext, useContext, useState } from "react";

type SectionStates = "about" | "experience" | "projects";

const initialContextValue: {
  section: SectionStates;
  setSection: React.Dispatch<React.SetStateAction<SectionStates>>;
} = {
  section: "about",
  setSection: () => {},
};

const ScrollContext = createContext(initialContextValue);

export const useScrollContext = () => {
  return useContext(ScrollContext);
};

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const [section, setSection] = useState<SectionStates>("about");

  return (
    <ScrollContext.Provider value={{ section, setSection }}>
      {children}
    </ScrollContext.Provider>
  );
}
