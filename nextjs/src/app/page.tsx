import { Hero } from '@/components/hero'
import { Header } from '@/components/header'
import { Skill } from '@/components/skills'
import { About } from '@/components/about'
import { ProjectCard } from '@/components/projectCard'

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <section className="PAGE_1 flex flex-col items-center justify-center flex-wrap h-screen w-full">
        <Hero />
        <div className='flex flex-wrap justify-center gap-4 mt-10'>
          <Skill
            tech='html5' 
            link={'https://developer.mozilla.org/en-US/docs/Web/HTML'}
          />
          <Skill 
            tech='css3'
            link='https://developer.mozilla.org/en-US/docs/Web/CSS'
          />
          <Skill 
            tech='tailwindcss'
            link='https://tailwindcss.com/'
          />
          <Skill 
            tech='bootstrap'
            link='https://getbootstrap.com/'
          />
          <Skill 
            tech='javascript'
            link='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
          />
          <Skill 
            tech='typescript'
            link='https://www.typescriptlang.org/'
          />
          <Skill 
            tech='reactjs'
            link='https://react.dev/'
          />
          <Skill 
            tech='nextjs'
            link='https://nextjs.org/'
          />
          <Skill 
            tech='redux'
            link='https://redux-toolkit.js.org/'
          />
          <Skill 
            tech='nodejs'
            link='https://nodejs.org/en/docs'
          />
          <Skill 
            tech='expressjs'
            link='https://expressjs.com/'
          />
          <Skill 
            tech='postgresql'
            link='https://www.postgresql.org/docs/'
          />
          <Skill 
            tech='sequelizejs'
            link='https://sequelize.org/docs/v6/'
          />
          <Skill 
            tech='mongodb'
            link='https://www.mongodb.com/'
          />
          <Skill 
            tech='supabase'
            link='https://supabase.com/'
          />
          <Skill 
            tech='bash'
            link='https://www.gnu.org/software/bash/manual/bash.html'
          />
          <Skill 
            tech='linux'
            link='https://wiki.archlinux.org/title/Kernel'
          />
          <Skill 
            tech='auth0'
            link='https://auth0.com/docs'
          />
          <Skill 
            tech='git'
            link='https://git-scm.com/'
          />
        </div>
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
