"use client"

import Link from "next/link"
import { useSectionContext } from "../hooks/useSection"
import { SpaceTop } from "../Space"
import { cn } from "@/utils/cn"
import { DotFilledIcon } from "@radix-ui/react-icons"

interface DesktopHeadersProps {
  className: string
}

export function DesktopHeaders({ className }: DesktopHeadersProps) {
  const { currentSection } = useSectionContext()

  return (
    <div className={cn("tracking-wider text-lg", className)}>
      <Link href='/' className='flex items-center w-fit transition'>
        <DotFilledIcon
          className={cn("transition", {
            block: currentSection === "about",
            "translate-y-9": currentSection === "experience",
            "translate-y-[72px]": currentSection === "projects",
          })}
        />
        <div
          className={cn("transition translate-x-0", {
            "translate-x-2 font-normal": currentSection === "about",
            "-translate-x-3": currentSection !== "about",
          })}
        >
          about
        </div>
      </Link>
      <Link href='/' className='flex items-center w-fit transition'>
        <DotFilledIcon
          className={cn("hidden transition", {
            "block opacity-0": currentSection === "experience",
          })}
        />
        <div
          className={cn("transition", {
            "translate-x-2 font-normal": currentSection === "experience",
          })}
        >
          experience
        </div>
      </Link>
      <Link href='/' className='flex items-center w-fit transition'>
        <DotFilledIcon
          className={cn("hidden transition", {
            "block opacity-0": currentSection === "projects",
          })}
        />
        <div
          className={cn("transition", {
            "translate-x-2 font-normal": currentSection === "projects",
          })}
        >
          projects
        </div>
      </Link>

      <SpaceTop size={10} />
      <Link href='/SoftwareResume.pdf' target='_blank' className='w-fit'>
        resume
      </Link>
    </div>
  )
}
