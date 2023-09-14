import Link from 'next/link'
import { GitHubLogoIcon, LinkedInLogoIcon, FileTextIcon } from '@radix-ui/react-icons'
import { ProjectCard } from './components/card/ProjectCard'
import { ExperienceCard } from './components/card/ExperienceCard'
import { MobileHeader } from './components/headers/MobileHeaders'
import { SpaceTop } from './components/Space'

import { MainSection } from './components/MainSection'

export default function Home() {
  return (
    <div className="flex justify-center items-center w-screen h-screen text-neutral-50 font-extralight">

      <main className="w-[90%] h-[90%] border border-neutral-200 backdrop-blur-sm relative flex flex-col">

        <header className="font-extralight flex flex-col p-5">

          <h1 className="text-6xl">Alejandro Perez</h1>
          <p className="text-lg pt-1">Software Developer</p>

          <div className='flex gap-2 pt-1'>
            <a href='https://github.com/agp745' target='_blank' className='hover:scale-110 transition'>
              <GitHubLogoIcon width={20} height={20} />
            </a>
            <a href='https://www.linkedin.com/in/alejandro-perez-dev745/' target='_blank' className='text-neutral-200 hover:scale-110 transition'>
              <LinkedInLogoIcon width={20} height={20} />
            </a>
            <Link href='/SoftwareResume.pdf' target='_blank' className=''>
              <FileTextIcon width={20} height={20} />
            </Link>
          </div>

          <div className=' hidden lg:flex lg:flex-col lg:gap-1 lg:pt-20 lg:font-normal'>
            <Link href='/#'>about</Link>
            <Link href='/#'>experience</Link>
            <Link href='/#'>projects</Link>
            <Link href='/SoftwareResume.pdf' target='_blank' className='flex items-center gap-1'>
              <FileTextIcon />
              <div>resume</div>
            </Link>
          </div>

        </header>

        <SpaceTop size={10} />

        <MainSection className='overflow-y-scroll overflow-x-hidden px-2'>
          <div id='about' className='font-normal pb-12'>
            <SpaceTop size={3} />
            <MobileHeader>about</MobileHeader>
            <SpaceTop size={7} />
            <p className='text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A distinctio eveniet quo saepe sed nemo nobis reiciendis voluptate sint consequuntur praesentium, mollitia velit corrupti eos odit dolore iusto ut, aliquid libero explicabo ex! Fugit assumenda dolore recusandae, eum delectus cumque impedit provident.</p>
          </div>

          <div id='experience' className='flex flex-col gap-4 pb-12'>
            <MobileHeader>experience</MobileHeader>
            <SpaceTop size={3} />
            <ExperienceCard 
              position='Freelance Web Developer'
              company='MM General Contracting'
              dates={{
                from: 'June 2023',
                to: 'Present' 
              }}
              description="Independently spearheaded the creation of MM General Contracting's website, architecting a dynamic online presence from inception using modern technologies. Engineered a command-line interface (CLI) tool resulting in a substantial reduction in image sizes. This enhancement translated to notable improvements in website load times and image optimization, ultimately enhancing the overall user experience."
              technologies={['Typescript','React', 'React Router', 'TailwindCSS', 'Docker']}
            />
          </div>

          <div id='projects' className='flex flex-col gap-4 pb-4'>
            <MobileHeader>projects</MobileHeader>
            <SpaceTop size={3} />
            <ProjectCard
              title='resizer-cli'
              description='A command-line interface (CLI) tool that utilizes FFMPEG to resize all images in a specified folder.'
              technologies={['Node.js', 'Typescript', 'Docker', 'FFMPEG']}
              link='https://github.com/agp745/resizer-cli#readme'
            />
            <ProjectCard 
              title='Application Tracker'
              description='A sophisticated job application tracker, offering a sleek and intuitive
              platform to manage and monitor job applications effectively.'
              technologies={['Next.js', 'Typescript', 'TailwindCSS', 'Supabase', 'Prisma', 'NextAuth', 'AWS Lambda', 'AWS EventBridge']}
              link='https://app-tracker-three.vercel.app/login?callbackUrl=https://app-tracker-three.vercel.app/'
            />
            <ProjectCard 
              title='EzGo'
              description='EzGo is a project aimed at providing users with a platform to plan their commutes using
              eco-friendly modes of transportation.'
              technologies={['Next.js', 'Javascript', 'Redux Toolkit', 'TailwindCSS', 'MongoDB', 'Prisma', 'NextAuth']}
              link='https://ezgo.vercel.app/'
            />
            <ProjectCard 
              title='Pub Crawl'
              description='a dynamic application that simplifies pub exploration, allowing users to
              effortlessly discover and explore local pubs, access comprehensive information on various beers, and
              find exciting venues in different cities.'
              technologies={['React', 'Typescript', 'Redux Toolkit', 'TailwindCSS', 'Supabase']}
              link='https://pubcrawl.vercel.app/'
            />
            <ProjectCard 
              title='Projectied'
              description=' Collaborative management app that allows users to create projects/lists and organize their tasks within
              each project.'
              technologies={['Node.js', 'Javascript', 'HTML', 'CSS', 'PostgreSQL', 'Auth0']}
              link='https://projectied.onrender.com/'
            />
            <ProjectCard 
              title='My Gamer List'
              description='Video game database search app for Gamers to help and encourage discovery of new (& old) gaming
              experiences.'
              technologies={['Javascript', 'HTML', 'CSS', 'TailwindCSS']}
              link='https://mygamerlist.onrender.com/'
            />
          </div>
        </MainSection>
        

        <footer className="absolute -bottom-5 right-0">
          <div className="text-xs text-neutral-400 italic">art by Samantha Keely Smith</div>
        </footer>
      </main>

    </div>
  )
}

