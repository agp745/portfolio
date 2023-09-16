import Link from "next/link";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  FileTextIcon,
} from "@radix-ui/react-icons";
import { ProjectCard } from "./components/cards/ProjectCard";
import { ExperienceCard } from "./components/cards/ExperienceCard";
import { MobileHeader } from "./components/headers/MobileHeaders";
import { DesktopHeaders } from "./components/headers/DesktopHeaders";
import { SpaceTop } from "./components/Space";

import { Main } from "./components/Main";
import { Section } from "./components/Section";

export default function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center font-extralight text-neutral-50">
      <main className="relative flex h-[90%] w-[90%] flex-col border border-neutral-200 backdrop-blur-sm lg:flex-row lg:justify-between">
        <header className="flex flex-col p-5 font-extralight">
          <h1 className="text-6xl">Alejandro Perez</h1>
          <p className="pt-1 text-lg">Software Developer</p>

          <div className="flex gap-2 pt-1">
            <a
              href="https://github.com/agp745"
              target="_blank"
              className="transition hover:scale-110"
            >
              <GitHubLogoIcon width={20} height={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/alejandro-perez-dev745/"
              target="_blank"
              className="text-neutral-200 transition hover:scale-110"
            >
              <LinkedInLogoIcon width={20} height={20} />
            </a>
            <Link href="/SoftwareResume.pdf" target="_blank" className="">
              <FileTextIcon width={20} height={20} />
            </Link>
          </div>

          <DesktopHeaders className="hidden lg:flex lg:flex-col lg:gap-2 lg:pt-20 lg:font-normal" />
          {/* <div className='hidden lg:flex lg:flex-col lg:gap-2 lg:pt-20 lg:font-normal'>
            <Link href='/#about'>about</Link>
            <Link href='/#experience'>experience</Link>
            <Link href='/#projects'>projects</Link>
            <Link href='/SoftwareResume.pdf' target='_blank' className='pt-10'>resume</Link>
          </div> */}
        </header>

        <SpaceTop size={10} />

        <Main className="overflow-x-hidden overflow-y-scroll px-2 sm:px-10 md:px-12 lg:w-fit">
          <Section id="about" className="pb-12 font-normal lg:max-w-xl">
            <SpaceTop size={3} />
            <MobileHeader>about</MobileHeader>
            <SpaceTop size={7} />
            <div className="flex flex-col gap-2 text-sm sm:text-base">
              <p>
                Back in 2017, I discovered my passion for creative collaboration
                through music. Fast forward to today, and I&apos;m a classically
                trained composer who now channels that same drive into software
                engineering.
              </p>
              <p>
                My primary focus revolves around building full-stack software
                and user interfaces using technologies like TypeScript, Next.js,
                and Docker. During my free time, I like to explore and integrate
                modern technologies such as AWS Lambda and GoLang into my
                personal projects. Additionally, I delve into the intricacies of
                data structures and algorithms to further hone my skills.
              </p>
              <p>
                When I am not on the computer, you can catch me playing piano,
                immersing myself in the world of noise rock, or figuring out new
                ways to brew my coffee.
              </p>
            </div>
          </Section>

          <Section id="experience" className="flex flex-col gap-4 pb-12">
            <MobileHeader>experience</MobileHeader>
            <div className="md:flex md:flex-col md:items-center md:gap-4 lg:items-end">
              <SpaceTop size={3} />
              <ExperienceCard
                position="Freelance Web Developer"
                company="MM General Contracting"
                dates={{
                  from: "June 2023",
                  to: "Present",
                }}
                description="Independently spearheaded the creation of MM General Contracting's website, architecting a dynamic online presence from inception using modern technologies. Engineered a command-line interface (CLI) tool resulting in a substantial reduction in image sizes. This enhancement translated to notable improvements in website load times and image optimization, ultimately enhancing the overall user experience."
                technologies={[
                  "Typescript",
                  "React",
                  "React Router",
                  "TailwindCSS",
                  "Docker",
                ]}
              />
            </div>
          </Section>

          <Section id="projects" className="flex flex-col gap-4 pb-4">
            <MobileHeader>projects</MobileHeader>
            <div className="flex flex-col gap-4 md:items-center lg:items-end ">
              <SpaceTop size={3} />
              <ProjectCard
                title="resizer-cli"
                description="A command-line interface (CLI) tool that utilizes FFMPEG to resize all images in a specified folder."
                technologies={["Node.js", "Typescript", "Docker", "FFMPEG"]}
                link="https://github.com/agp745/resizer-cli#readme"
              />
              <ProjectCard
                title="Application Tracker"
                description="A sophisticated job application tracker, offering a sleek and intuitive
                platform to manage and monitor job applications effectively."
                technologies={[
                  "Next.js",
                  "Typescript",
                  "TailwindCSS",
                  "Supabase",
                  "Prisma",
                  "NextAuth",
                  "AWS Lambda",
                  "AWS EventBridge",
                ]}
                link="https://app-tracker-three.vercel.app/login?callbackUrl=https://app-tracker-three.vercel.app/"
              />
              <ProjectCard
                title="EzGo"
                description="EzGo is a project aimed at providing users with a platform to plan their commutes using
                eco-friendly modes of transportation."
                technologies={[
                  "Next.js",
                  "Javascript",
                  "Redux Toolkit",
                  "TailwindCSS",
                  "MongoDB",
                  "Prisma",
                  "NextAuth",
                ]}
                link="https://ezgo.vercel.app/"
              />
              <ProjectCard
                title="Pub Crawl"
                description="a dynamic application that simplifies pub exploration, allowing users to
                effortlessly discover and explore local pubs, access comprehensive information on various beers, and
                find exciting venues in different cities."
                technologies={[
                  "React",
                  "Typescript",
                  "Redux Toolkit",
                  "TailwindCSS",
                  "Supabase",
                ]}
                link="https://pubcrawl.vercel.app/"
              />
              <ProjectCard
                title="Projectied"
                description=" Collaborative management app that allows users to create projects/lists and organize their tasks within
                each project."
                technologies={[
                  "Node.js",
                  "Javascript",
                  "HTML",
                  "CSS",
                  "PostgreSQL",
                  "Auth0",
                ]}
                link="https://projectied.onrender.com/"
              />
              <ProjectCard
                title="My Gamer List"
                description="Video game database search app for Gamers to help and encourage discovery of new (& old) gaming
                experiences."
                technologies={["Javascript", "HTML", "CSS", "TailwindCSS"]}
                link="https://mygamerlist.onrender.com/"
              />
            </div>
          </Section>
        </Main>

        <footer className="absolute -bottom-5 right-0">
          <div className="text-xs italic text-neutral-400">
            art by Samantha Keely Smith
          </div>
        </footer>
      </main>
    </div>
  );
}
