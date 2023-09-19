"use client";

import "../globals.css";
import { useState, useEffect } from "react";
import { cn } from "@/utils/cn";

export default function LoadAnimation() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 5000);
  }, []);

  return (
    <div
      className={cn(
        "LOAD_ANIMATION fixed bottom-0 left-0 right-0 top-0 bg-black text-white",
        {
          hidden: isLoaded,
        },
      )}
    >
      <div className="flex h-full w-full items-center justify-center">
        <section className="flex items-center">
          <div className="animate-pulse text-8xl">@</div>
          <div className="flex flex-col gap-2 font-mono">
            <div className="relative pt-5 text-3xl sm:text-5xl">
              <p className="TYPING_ANIMATION overflow-x-clip whitespace-nowrap border-r border-r-orange-500">
                lejandro Perez
              </p>
            </div>
            <p className="pl-2 tracking-widest">agp745</p>
          </div>
        </section>
      </div>
    </div>
  );
}
