'use client'

import Link from "next/link"
import { useState } from "react"
import { Bars3Icon, XMarkIcon, MinusIcon } from "@heroicons/react/24/outline"

const WideScreen = () => {
    return (
    <div className="flex justify-center items-center h-full gap-6">
        <Link href={'#'}>About</Link>
        <Link href={'#'}>Projects</Link>
        <Link href={'#'}>Contacts</Link>
        <div>|</div>
        <Link href={'https://github.com/agp745'}>GitHub</Link>
        <Link href={'https://www.linkedin.com/in/alejandro-perez-dev745/'}>LinkedIn</Link>
        <Link href={'/TECH_RESUME.pdf'} target="_blank">Resume</Link>
    </div>
    )
}

const SmallScreen = () => {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const [fadeAnimation, setFadeAnimation] = useState<'SHOW_MENU' | 'HIDE_MENU'>('SHOW_MENU')

    const menuFade = () => {
        if (!isMenuOpen) {
            setFadeAnimation("SHOW_MENU")
            setIsMenuOpen(!isMenuOpen)
        } else {
            setFadeAnimation("HIDE_MENU")
            setTimeout(() => {
                setIsMenuOpen(!isMenuOpen)
            }, 500)
        }
    }

    const SmallScreenMenu = () => {

        const linkStyle = 'hover:text-white transition-colors duration-100 ease-in'

        return (
            <section className={`fixed top-0 bottom-0 left-0 right-0 bg-slate-950 bg-opacity-80 z-40 ${fadeAnimation}`}>
                <div className={`flex flex-col items-center justify-center h-full gap-6 text-3xl text-slate-300 ${fadeAnimation}`}>
                    <Link 
                        href={'#'}
                        target="_blank"
                        className={linkStyle}
                    >
                        About
                    </Link>
                    <Link 
                        href={'#'}
                        target="_blank"
                        className={linkStyle}
                    >
                        Projects
                    </Link>
                    <Link 
                        href={'#'}
                        target="_blank"
                        className={linkStyle}
                    >
                        Contact
                    </Link>
                    <MinusIcon className="w-10" />
                    <Link 
                        href={'https://github.com/agp745'}
                        target="_blank"
                        className={linkStyle}
                    >
                        GitHub
                    </Link>
                    <Link
                        href={'https://www.linkedin.com/in/alejandro-perez-dev745/'}
                        target="_blank"
                        className={linkStyle}
                    >
                        LinkedIn
                    </Link>
                    <Link
                        href={'/TECH_RESUME.pdf'}
                        target="_blank"
                        className={linkStyle}
                    >
                        Resume
                    </Link>
                </div>
            </section>
        )
    }

    return (
        <div className="flex justify-end items-center h-full">
            <button
                onClick={menuFade}
                className="mr-4 mt-4 text-white active:scale-95 z-50"
            >
                {fadeAnimation === 'SHOW_MENU' ? <XMarkIcon className="w-10 h-10" /> : <Bars3Icon className="w-10 h-10" /> }
            </button>
            {isMenuOpen && <SmallScreenMenu />}
        </div>
    )
}

export const Header = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 h-10">
            <SmallScreen />
            {/* <WideScreen /> */}
        </nav>
    )
}