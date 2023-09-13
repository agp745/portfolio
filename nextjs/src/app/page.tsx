import Link from 'next/link'
import { GitHubLogoIcon, LinkedInLogoIcon, FileTextIcon } from '@radix-ui/react-icons'
import { ProjectCard } from './components/ProjectCard'
import { ExperienceCard } from './components/ExperienceCard'

export default function Home() {
  return (
    <main className="flex justify-center items-center w-screen h-screen text-neutral-50 font-extralight">

      <section className="w-[90%] h-[90%] border border-neutral-200 backdrop-blur-sm relative flex">
        <header className="font-extralight absolute top-5 left-5">

          <h1 className="text-4xl">Alejandro Perez</h1>
          <p className="text-md">Software Developer</p>

          <div className='flex gap-2 pt-1'>
            <a href='https://github.com/agp745' target='_blank' className='hover:scale-110 transition'>
              <GitHubLogoIcon width={15} height={15} />
            </a>
            <a href='https://www.linkedin.com/in/alejandro-perez-dev745/' target='_blank' className='text-neutral-200 hover:scale-110 transition'>
              <LinkedInLogoIcon width={15} height={15} />
            </a>
          </div>

          <div className='flex flex-col gap-1 pt-20 font-normal'>
            <Link href='/#'>about</Link>
            <Link href='/#'>experience</Link>
            <Link href='/#'>projects</Link>
            <Spacer padding={10} />
            <Link href='/SoftwareResume.pdf' target='_blank' className='flex items-center gap-1'>
              <FileTextIcon />
              <div>resume</div>
            </Link>
          </div>

        </header>

        <div className='w-1/2'></div>

        <section className='w-1/2 overflow-y-scroll' >
          <div id='about' className='font-normal text-lg py-12'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A distinctio eveniet quo saepe sed nemo nobis reiciendis voluptate sint consequuntur praesentium, mollitia velit corrupti eos odit dolore iusto ut, aliquid libero explicabo ex! Fugit assumenda dolore recusandae, eum delectus cumque impedit provident.
          </div>

          <div id='experience' className='flex flex-col gap-4 pb-12'>
            <ExperienceCard 
              position='Freelance Web Developer'
              company='MM General Contracting'
              dates={{
                from: 'June 2023',
                to: 'Present' 
              }}
              description="Independently spearheaded the creation of MM General Contracting's website, architecting a dynamic online presence from inception using modern technologies. Engineered a command-line interface (CLI) tool resulting in a substantial reduction in image sizes. This enhancement translated to notable improvements in website load times and image optimization, ultimately enhancing the overall user experience."
              technologies={['Typescript','React', 'React Router', 'TailwindCSS']}
            />
          </div>

          <div id='projects' className='flex flex-col gap-4'>
            <ProjectCard
              title='resizer-cli'
              description='A command-line interface (CLI) tool that utilizes FFMPEG to resize all images in a specified folder.'
              image=''
              technologies={['Node.js', 'Typescript', 'Docker', 'FFMPEG']}
              link='https://github.com/agp745/resizer-cli#readme'
            />
            <ProjectCard 
              title='Application Tracker'
              description='A sophisticated job application tracker, offering a sleek and intuitive
              platform to manage and monitor job applications effectively.'
              image=''
              technologies={['Next.js', 'Typescript', 'TailwindCSS', 'Supabase', 'Prisma', 'NextAuth', 'AWS Lambda', 'AWS EventBridge']}
              link='https://app-tracker-three.vercel.app/login?callbackUrl=https://app-tracker-three.vercel.app/'
            />
            <ProjectCard 
              title='EzGo'
              description='EzGo is a project aimed at providing users with a platform to plan their commutes using
              eco-friendly modes of transportation.'
              image=''
              technologies={['Next.js', 'Javascript', 'Redux Toolkit', 'TailwindCSS', 'MongoDB', 'Prisma', 'NextAuth']}
              link='https://ezgo.vercel.app/'
            />
            <ProjectCard 
              title='Pub Crawl'
              description='a dynamic application that simplifies pub exploration, allowing users to
              effortlessly discover and explore local pubs, access comprehensive information on various beers, and
              find exciting venues in different cities.'
              image=''
              technologies={['React', 'Typescript', 'Redux Toolkit', 'TailwindCSS', 'Supabase']}
              link='https://pubcrawl.vercel.app/'
            />
            <ProjectCard 
              title='Projectied'
              description=' Collaborative management app that allows users to create projects/lists and organize their tasks within
              each project.'
              image=''
              technologies={['Node.js', 'Javascript', 'HTML', 'CSS', 'PostgreSQL', 'Auth0']}
              link='https://projectied.onrender.com/'
            />
            <ProjectCard 
              title='My Gamer List'
              description='Video game database search app for Gamers to help and encourage discovery of new (& old) gaming
              experiences.'
              image=''
              technologies={['Javascript', 'HTML', 'CSS', 'TailwindCSS']}
              link='https://mygamerlist.onrender.com/'
            />
          </div>
        </section>
        

        <footer className="absolute -bottom-5 right-0">
          <div className="text-xs text-neutral-400 italic">art by Samantha Keely Smith</div>
        </footer>
      </section>

    </main>
  )
}

function Spacer({ padding }: { padding: number }) {
  return <div className={`pt-${padding}`}></div>
}
