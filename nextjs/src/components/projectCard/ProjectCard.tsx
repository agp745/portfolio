import Image from "next/image"
import Link from "next/link"
import { Url } from "url"

interface ProjectCardProps {
    image: string,
    title: string,
    link: string,
}

export const ProjectCard = ({ image, title, link }: ProjectCardProps) => {
    return (
        <Link href={link}>
            <Image
                src={image}
                alt={title}
                width={30}
                height={30}
            />
            <div>{title}</div>
        </Link>
    )
}