import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
    image: string,
    title: string,
    link: string,
}

export const ProjectCard = ({ image, title, link }: ProjectCardProps) => {
    return (
        <Link 
            href={link}
            className="bg-blue-400 drop-shadow-2xl"
        >
            <img
                src={image}
                alt={title}
                className="w-auto h-56"
            />
            <div className="">{title}</div>
        </Link>
    )
}