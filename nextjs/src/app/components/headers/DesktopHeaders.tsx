"use client"

import Link from "next/link"
import { useState } from "react"
import { useSectionContext } from "../hooks/useSection"
import { SpaceTop } from "../Space"

interface DesktopHeadersProps {
  className: string
}

export function DesktopHeaders({ className }: DesktopHeadersProps) {
  const { currentSection } = useSectionContext()

  console.log(currentSection)

  return (
    <div className={className}>
      <Link href='/#about' className='w-fit'>
        about
      </Link>
      <Link href='/#experience' className='w-fit'>
        experience
      </Link>
      <Link href='/#projects' className='w-fit'>
        projects
      </Link>
      <SpaceTop size={10} />
      <Link href='/SoftwareResume.pdf' target='_blank' className='w-fit'>
        resume
      </Link>
    </div>
  )
}
