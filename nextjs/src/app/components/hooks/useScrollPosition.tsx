"use client";

import { createContext, useContext, useState } from "react";

const initialContextValue: {
  scrollPosition: number | undefined;
  setScrollPosition: React.Dispatch<React.SetStateAction<number | undefined>>;
} = {
  scrollPosition: undefined,
  setScrollPosition: () => {},
};

const ScrollPositionContext = createContext(initialContextValue);

export const useScrollPosition = () => {
  return useContext(ScrollPositionContext);
};

export function ScrollPositionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scrollPosition, setScrollPosition] = useState<number | undefined>(
    undefined,
  );

  return (
    <ScrollPositionContext.Provider
      value={{ scrollPosition, setScrollPosition }}
    >
      {children}
    </ScrollPositionContext.Provider>
  );
}
