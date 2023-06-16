'use client'

import { useState, useEffect } from "react"

export default function Test() {

    const [screenWidth, setScreenWidth] = useState<number | null>(null)

    useEffect(() => {
        addEventListener("resize",() => setScreenWidth(window.innerWidth))
        
    }, [])

    return (
        <>
            <h1 className="text-3xl">{screenWidth}</h1>
        </>
    )
}