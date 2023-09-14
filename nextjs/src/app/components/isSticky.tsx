'use client'

import { useEffect, useState } from "react"

export function useStickyHeader( threshold: number ) {
    const [isSticky, setIsSticky] = useState(false)

    const handleScroll = () => {
        console.log(window.scrollY, threshold)
        if(threshold) {
            setIsSticky(true)
        } else {
            setIsSticky(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    
        // return () => {
        //     window.removeEventListener('scroll', handleScroll)
        // }
    }, [])

    return isSticky
}