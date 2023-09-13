import { ArrowTopRightIcon } from '@radix-ui/react-icons'

interface ProjectCardProps {
    title: string
    description: string
    image: string
    technologies: string[]
    link: string
}

export function ProjectCard({ title, description, image, technologies, link }: ProjectCardProps) {

    return (
    <a href={link} target='_blank' className='flex flex-col bg-black p-4 rounded-md'>
        <div className='flex gap-1 items-center'>
            <h3 className='font-medium text-white'>{title}</h3>
            <ArrowTopRightIcon className='' />
        </div>
        <p className='font-normal text-sm text-neutral-400'>{description}</p>
        <div className='flex gap-1 flex-wrap'>
            {technologies.map((tech, index) => <div key={index} className='bg-blue-500 rounded-full px-2 font-normal text-sm'>
                {tech}
            </div>)}
        </div>
    </a>)
}