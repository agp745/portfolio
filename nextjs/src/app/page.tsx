import { Hero } from '@/components/hero'
import { Header } from '@/components/header'
import { Skill } from '@/components/skills'
import { About } from '@/components/about'
import { ProjectCard } from '@/components/projectCard'
import { skillInfoArray } from '@/Lib/skillsArray'

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
    <div className='flex flex-wrap justify-center gap-4 mt-10'>
      {skills}
    </div>
  )
}

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <section className="PAGE_1 flex flex-col items-center justify-center flex-wrap h-screen w-full">
        <Hero />
        <SkillsSection />
      </section>
      <section className='PAGE_2'>
        <About />
      </section>
      <section className='PAGE_3 flex h-screen bg-black'>
        <ProjectCard 
          title='EzGo'
          link={'/project/ezgo'}
          image='/projects/ezgo.png'
        />
      </section>
      <Header />
    </main>
  )
}
