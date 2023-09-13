interface ExperienceCardProps {
    position: string
    company: string
    description: string
    dates: {
        from: string,
        to: string
    }
    technologies: string[]
}

export function ExperienceCard({ position, company, description, dates, technologies }: ExperienceCardProps) {
    return (
    <div className='flex flex-col bg-black p-4 rounded-md'>
        <h3 className='font-medium text-white'>{position} - {company}</h3>
        <p className='font-normal text-sm text-neutral-400'>{description}</p>
        <div className='flex gap-1 flex-wrap'>
            {technologies.map((tech, index) => <div key={index} className='bg-blue-500 rounded-full px-2 font-normal text-sm'>
                {tech}
            </div>)}
        </div>
    </div>)
}