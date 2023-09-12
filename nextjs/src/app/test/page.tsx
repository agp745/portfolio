
import { PCard } from "@/components/card"

export default function Test() {

    return (
        <main className="h-screen w-screen relative">
            <div className="text-6xl font-bold">Hello World</div>
            <PCard 
                title="test"
                image="projects/ezgo.png"
                technologies={['typescript', 'docker']}
                link={{
                    github: 'https://github.com/agp745/resizer-cli#readme',
                    demo: 'youtube.com',
                    site: 'linkedin.com'
                }}
            />
        </main>
    )
}