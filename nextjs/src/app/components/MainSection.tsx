'use client'

import { ReactNode, useState, useRef, createContext, useContext } from "react";

interface MainSectionProps {
    children: ReactNode
    className: string
}

export const ScrollPositionContext = createContext<number | undefined>(undefined)

export function useScrollPosition() {
    return useContext(ScrollPositionContext)
}

export function MainSection({ children, className }: MainSectionProps) {

    const [scrollPosition, setScrollPosition] = useState<number | undefined>(undefined)
    const mainRef = useRef<HTMLElement | null>(null)

    const handleScroll = () => {
        if(mainRef.current) {
            setScrollPosition(mainRef.current.scrollTop)
        }
    }

    return (
        <ScrollPositionContext.Provider value={scrollPosition}>
            <section ref={mainRef} onScroll={handleScroll} className={className}>
                {children}
            </section>
        </ScrollPositionContext.Provider>
    )
}