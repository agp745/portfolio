import { ArrowTopRightIcon } from '@radix-ui/react-icons'
import { cn } from '@/utils/cn'

interface ProjectCardProps {
    title: 'resizer-cli' | 'Application Tracker' | 'EzGo' | 'Pub Crawl' | 'Projectied' | 'My Gamer List'
    description: string
    technologies: string[]
    link: string,
    className?: string
}

const resizerImageURL = ''
const appTrackerImageURL = ''
const ezgoImageURL = '/projects/ezgo.png'
const pubcrawlImageURL = '/projects/pubcrawl.png'
const projectiedImageURL = '/projects/projectied.png'
const mglImageURL = '/projects/mgl.png'

export function ProjectCard({ title, description, technologies, link , className}: ProjectCardProps) {

    return (
    <a href={link} target='_blank' className={cn(
        'flex bg-black rounded-md bg-cover bg-no-repeat',
        className,
        {
            'bg-[url(/projects/ezgo.png)]': title === 'EzGo',
            'bg-[url(/projects/pubcrawl.png)]': title === 'Pub Crawl',
            'bg-[url(/projects/projectied.png)]': title === 'Projectied',
            'bg-[url(/projects/mgl.png)]': title === 'My Gamer List',
        }
    )}>
        <div className='backdrop-blur-sm bg-black/50 p-4 rounded-md'>
        <div className='flex flex-col'>
            <div className='flex gap-1 items-center'>
                <h3 className='font-medium text-white'>{title}</h3>
                <ArrowTopRightIcon className='' />
            </div>
            <p className='font-normal text-sm text-neutral-400'>{description}</p>
            <div className='flex gap-1 flex-wrap pt-2'>
                {technologies.map((tech, index) => <div key={index} className='bg-blue-500 rounded-full px-2 font-normal text-sm border border-blue-900'>
                    {tech}
                </div>)}
            </div>
        </div>
        </div>
    </a>)
}