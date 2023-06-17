import { projectsArray } from "@/Lib/projectsArray"

interface ProjectParams {
    params: {
        index: number
    }
}

export default function ProjectPage({ params }: ProjectParams) {

    const project = projectsArray[params.index]

    return (
        <main className="w-full">
            <section className="flex justify-evenly mt-20">
                <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-[30rem]"
                />
                <div className="flex flex-col items-center bg-green-500 ">
                    <div className="text-3xl font-semibold">{project.title}</div>
                </div>
            </section>
        </main>
    )
}