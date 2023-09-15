'use client'

//top - 50.75

import { useRef, useState, useEffect, MutableRefObject } from "react"
import { useScrollPosition } from "./Main"
import { useIsVisible } from "./hooks/useIsVisible"

interface SectionProps {
    children: React.ReactNode
    id: string
    className: string
}

export function Section({ children, id, className }: SectionProps) {

    const sectionRef = useRef<HTMLDivElement | null>(null)

    const scrollPosition = useScrollPosition()
    const isVisible = useIsVisible(sectionRef as MutableRefObject<HTMLDivElement>)

    useEffect(() => {
        if(sectionRef.current) {
            const top = sectionRef.current.getBoundingClientRect().top
            if(top <= 50.75) {
                console.log(sectionRef.current.id)
            }
        }
    }, [scrollPosition])
    
    return (
    <div id={id} className={className} ref={sectionRef}>
        {children}
    </div>)
}