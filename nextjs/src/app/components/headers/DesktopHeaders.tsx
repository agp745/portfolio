"use client";

import { useState, useContext, createContext } from "react";
import Link from "next/link";
import { SpaceTop } from "../Space";

interface DesktopHeadersProps {
  className: string;
}

export function DesktopHeaders({ className }: DesktopHeadersProps) {
  return (
    <div className={className}>
      <Link href="/#about" className="w-fit">
        about
      </Link>
      <Link href="/#experience" className="w-fit">
        experience
      </Link>
      <Link href="/#projects" className="w-fit">
        projects
      </Link>
      <SpaceTop size={10} />
      <Link href="/SoftwareResume.pdf" target="_blank" className="w-fit">
        resume
      </Link>
    </div>
  );
}
