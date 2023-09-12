import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'


export default function Home() {
  return (
    <main className="flex justify-center items-center w-screen h-screen text-neutral-200 font-extralight">

      <section className="w-[90%] h-[90%] border border-neutral-200 backdrop-blur-sm relative">
        <header className="font-extralight absolute top-5 left-5">
          <h1 className="text-4xl">Alejandro Perez</h1>
          <p className="text-md">Software Developer</p>

          <div className='flex gap-2 pt-1'>
            <a href="https://github.com/agp745" target='_blank'>
              <GitHubLogoIcon width={15} height={15}/>
            </a>
            <a href="https://www.linkedin.com/in/alejandro-perez-dev745/" target='_blank'>
              <LinkedInLogoIcon width={15} height={15} />
            </a>
          </div>

        </header>



        <footer className="absolute -bottom-5 right-0">
          <div className="text-xs text-neutral-400 italic">art by Samantha Keely Smith</div>
        </footer>
      </section>

    </main>
  )
}
