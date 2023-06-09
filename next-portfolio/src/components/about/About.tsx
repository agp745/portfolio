import Image from "next/image"
import Link from "next/link"
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'

export const About = () => {

    return (
        <section className='flex flex-col items-center bg-black bg-opacity-80 sm:h-screen'>
            <div className="flex gap-2 text-xs sm:text-xl font-light mt-10 mb-20 text-neutral-300">
                <div>Houston, TX</div>
                <div>|</div>
                <div>(832) 259-3990</div>
                <div>|</div>
                <div>alejandro.gperez745@gmail.com</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-10 sm:mt-10">
                <div className="flex justify-center items-center sm:ml-10">
                    <Image 
                        src={'/portfolio-headshot.png'}
                        alt="headshot"
                        width={500}
                        height={500}
                        className="rounded-full"
                    />
                </div>
                <div className="text-sm sm:text-lg flex flex-col gap-3 basis-1/2 mx-5 text-neutral-200">
                    <p>I am a recent graduate of the Moores School of Music at the University of Houston, where I studied composition, classical saxophone, and conducting. During my time there, I gained valuable experience working with ensembles to perform and conduct new music, developing my leadership and teamwork skills along the way.</p>
                    <p>Currently, I am studying Full Stack web development at DigitalCrafts, where I am learning and working with modern web technologies such as Typescript, Node.js, PostgreSQL, and React. Through this program, I have developed strong problem-solving and debugging skills and am excited to apply them to real-world projects.</p>
                    <p>As I continue to grow and develop my skills as a developer, I am eager to contribute to the tech field and make a meaningful impact on the world. I am actively seeking new opportunities to apply my skills and expertise, and I would love to connect with others who share my passion for technology and innovation.</p>
                </div>
            </div>

            <div className="mt-10 flex gap-5 text-neutral-600 opacity-80">
                <Link href={"https://github.com/agp745"} target="_blank">
                    <GitHubLogoIcon  className='w-8 h-8' />
                </Link>
                <Link href={"https://www.linkedin.com/in/alejandro-perez-dev745/"} target="_blank">
                    <LinkedInLogoIcon  className='w-8 h-8' />
                </Link>
            </div>
        </section>
    )
}

