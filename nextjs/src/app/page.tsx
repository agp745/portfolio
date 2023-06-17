import { Hero } from '@/components/hero'
import { Header } from '@/components/header'
import { Skill } from '@/components/skills'
import { About } from '@/components/about'
import { ProjectCard } from '@/components/projectCard'
import { skillInfoArray } from '@/Lib/skillsArray'
import { projectsArray } from '@/Lib/projectsArray'
import { link } from 'fs'

function SkillsSection() {
  const skills = skillInfoArray.map((skillInfo, index) => {
    return (
      <Skill 
        key={index}
        tech={skillInfo.tech}
        link={skillInfo.link}
      />
    )
  })

  return (
    <div className='flex w-full justify-center gap-3 self-end mb-2'>
      {skills}
    </div> 
  )
}

function ProjectsSection() {
  const projects = projectsArray.map((project, index) => {
    return (
      <ProjectCard 
        title={project.title}
        link={project.link}
        image={project.image}
      />
    )
  })

  return (
    <div className='flex flex-wrap justify-center gap-5'>
      {projects}
    </div>
  )
}

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <section className="PAGE_1 flex flex-col items-center justify-between h-screen w-full">
        <div className='flex w-full h-full justify-center'>
          <Hero />
        </div>
        <SkillsSection />
      </section>
      <section className='PAGE_2'>
        <About />
      </section>
      <section className='PAGE_3 flex flex-col items-center w-full p-10 bg-black'>
        <h1 className='text-6xl font-light self-start mb-10'>Projects</h1>
        <ProjectsSection />
      </section>
      <Header />
    </main>
  )
}
