'use client'

import { useState, useEffect, useRef } from "react"
import { useScrollPosition } from "../MainSection"
import { cn } from "@/utils/cn"

export function MobileHeader({ children }: { children: React.ReactNode }) {

   const headerRef = useRef<HTMLHeadingElement | null>(null)
   const scrollPosition = useScrollPosition()
   
   const [isSticky, setIsSticky] = useState(false)
   const [initialOffset, setInitialOffset] = useState<number | undefined>(undefined)

    useEffect(() => {

        if(headerRef.current && initialOffset === undefined) {
            setInitialOffset(headerRef.current.offsetTop)
        }

        if(headerRef.current && initialOffset) {
            if(headerRef.current.offsetTop - initialOffset >= 20 ){
                setIsSticky(true)
            } else {
                setIsSticky(false)
            }
        }
    }, [scrollPosition])

    return (
    <h2 
        ref={headerRef}
        className={cn(
            'sticky top-0 z-20 transition duration-50 ease-in py-1',
            {
                'bg-sky-500/80 rounded-b': isSticky
            }
        )}
    >
        <p className={cn(
            'uppercase text-lg font-light tracking-wider translate-x-0 transition ',
            {
                'translate-x-5 font-medium text-neutral-100': isSticky
            }
        )}>
            {children}
        </p>
    </h2>)
}