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
        'flex rounded-md bg-cover bg-no-repeat md:max-w-xl shadow-inner border-black group',
        className,
        {
            'bg-black': title === 'Application Tracker' || title === 'resizer-cli',
            'bg-[url(/projects/ezgo.png)]': title === 'EzGo',
            'bg-[url(/projects/pubcrawl.png)]': title === 'Pub Crawl',
            'bg-[url(/projects/projectied.png)]': title === 'Projectied',
            'bg-[url(/projects/mgl.png)]': title === 'My Gamer List',
        }
    )}>
        <div className='backdrop-blur-sm bg-black/50 lg:bg-black/100 lg:hover:bg-black/50 p-4 rounded-md transition duration-100 ease-in'>
        <div className='flex flex-col lg:gap-3'>
            <div className='flex gap-1 items-center'>
                <h3 className='font-medium text-white group-hover:text-sky-400 transition duration-100 ease-in'>{title}</h3>
                <ArrowTopRightIcon className='group-hover:text-sky-500 -translate-x-[2px] translate-y-[3px] group-hover:translate-x-[2px] group-hover:-translate-y-[1px] transition duration-100 ease-in' />
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