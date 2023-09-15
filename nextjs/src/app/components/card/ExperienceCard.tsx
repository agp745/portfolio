import { DividerHorizontalIcon } from '@radix-ui/react-icons'

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
    <div className="flex flex-col bg-black p-4 rounded-md md:max-w-xl">
        <div className="flex items-center gap-1 w-full text-sm text-neutral-400 font-medium">
            <div>{dates.from}</div>
            <DividerHorizontalIcon /> 
            <div>{dates.to}</div>
        </div>
        <div className='flex flex-col'>
            <h3 className='font-medium text-white'>{position} - {company}</h3>
            <p className='font-normal text-sm text-neutral-400'>{description}</p>
            <div className='flex gap-1 flex-wrap pt-2'>
                {technologies.map((tech, index) => <div key={index} className='bg-blue-500 rounded-full px-2 font-normal text-sm border border-blue-900'>
                    {tech}
                </div>)}
            </div>
        </div>
    </div>)
}