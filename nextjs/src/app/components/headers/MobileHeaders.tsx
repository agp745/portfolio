"use client";

import { useState, useEffect, useRef } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import { cn } from "@/utils/cn";

export function MobileHeader({ children }: { children: React.ReactNode }) {
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const { scrollPosition } = useScrollPosition();

  const [isSticky, setIsSticky] = useState(false);
  const [initialOffset, setInitialOffset] = useState<number | undefined>(
    undefined,
  );

  useEffect(() => {
    if (headerRef.current && initialOffset === undefined) {
      setInitialOffset(headerRef.current.offsetTop);
    }

    if (headerRef.current && initialOffset) {
      if (headerRef.current.offsetTop - initialOffset >= 20) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }
  }, [scrollPosition, initialOffset]);

  return (
    <h2
      ref={headerRef}
      className={cn(
        "duration-50 sticky top-0 z-20 py-1 transition ease-in lg:hidden",
        {
          "rounded-b bg-sky-500/80": isSticky,
        },
      )}
    >
      <p
        className={cn(
          "translate-x-0 text-lg font-light uppercase tracking-wider transition ",
          {
            "translate-x-5 font-medium text-neutral-100": isSticky,
          },
        )}
      >
        {children}
      </p>
    </h2>
  );
}
