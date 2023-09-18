"use client"

import { createContext, useContext, useState } from "react"

type SectionStates = "about" | "experience" | "projects"

const InitialContextValue: {
  currentSection: SectionStates
  setCurrentSection: React.Dispatch<React.SetStateAction<SectionStates>>
} = {
  currentSection: "about",
  setCurrentSection: () => {},
}

const SectionContext = createContext(InitialContextValue)

export const useSectionContext = () => {
  return useContext(SectionContext)
}

export const SectionProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [currentSection, setCurrentSection] = useState<SectionStates>("about")

  return (
    <SectionContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </SectionContext.Provider>
  )
}
