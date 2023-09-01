'use client'

import { useState } from "react"
import Link from "next/link"

interface ProjectCardProps {
    image: string,
    title: string,
    link: string,
}

type HoveredStyles = 'bg-opacity-50' | 'bg-opacity-20'

export const ProjectCard = ({ image, title, link }: ProjectCardProps) => {

    const [isHovered, setIsHovered] = useState<boolean>(false)
    const [hoveredTitleStyles, setHoveredTitleStyles] = useState<HoveredStyles>('bg-opacity-20')

    const handleHover = () => {
        setIsHovered(!isHovered)
        if (isHovered) setHoveredTitleStyles('bg-opacity-20')
        else setHoveredTitleStyles('bg-opacity-50')
    }

    return (
        <Link 
            href={link}
            className="text-center bg-sks-painting bg-no-repeat"
        >
            <div 
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
            >
                <img
                    src={image}
                    alt={title}
                    className="w-auto h-56 relative"
                />
                <div className={`absolute -mt-7 px-2 text-lg bg-slate-950 ${hoveredTitleStyles} transition-all duration-100 ease-in-out`}>
                    {title}
                </div>
            </div>
            <div className="py-2">{title}</div>
        </Link>
    )
}