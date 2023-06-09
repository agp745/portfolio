'use client'

import Image from "next/image"
import { useState } from "react"

interface SkillProps {
    link: string,
    tech: string
}

export const Skill = ({ link, tech }: SkillProps) => {

    const [isHovered, setIsHovered] = useState<boolean>(false)

    return (
    <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex flex-col items-center gap-3 text-center hover:-translate-y-2 transition-all duration-100 ease-in"
    >
        <a href={link} target="_blank">
            <Image 
                src={`/icons/${tech}-icon.svg`}
                alt={`${tech}-icon`}
                width={50}
                height={50}
            />
        </a>
        {isHovered && <div className='absolute -bottom-7 uppercase font-semibold text-slate-100 text-md SHOW_TEXT_STATIC'>{tech}</div>}
    </div>
    )
}
