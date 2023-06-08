'use client'

import Image from "next/image"
import { useState } from "react"

const Icon = (props) => {

    const {hoveredIcon, setHoveredIcon, tech} = props
    const isHovered = hoveredIcon === tech

    return(

        <div className="icon">
            <Image
                src={`/icons/${tech}-icon.svg`}
                alt={`${tech} icon`}
                className='icon'
                onMouseEnter={() => setHoveredIcon(tech)}
                onMouseLeave={() => setHoveredIcon(null)}
            />
            {isHovered && (
                <div className="icon-name">
                    <span>{tech}</span>
                </div>
            )}
        </div>
    )
}


export const Skills = () => {

    const [hoveredIcon, setHoveredIcon] = useState(null)

    const stateObj = {
        hoveredIcon: hoveredIcon,
        setHoveredIcon: setHoveredIcon,
    }

    return(
        <section className="skills">

            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" className="icon-link">
                <Icon {...stateObj} tech="html5" />
            </a>
            
        </section>
    )
}
