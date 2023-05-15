import HeaderProjects from "./HeaderProjects"

export default function PubCrawl() {

    return (
        <div className="project-body">
            <HeaderProjects />
            <section className="main-info">
                <div className="left">
                    <img src="/assets/pubcrawl-img.png"/>
                </div>
                <div className="right">
                    <h1>Pub Crawl</h1>
                    <div><i>repo:</i> <a href="https://github.com/agp745/PubCrawl" target="_blank" className='main-link'>github.com/agp745/PubCrawl</a></div>
                    <div><i>website:</i> <a href="https://pubcrawl.vercel.app/" target="_blank" className='main-link'>pubcrawl.vercel.app/</a></div>
                    <div><i>live demo:</i> <a href="" target="_blank" className='main-link'>tbd</a></div>
                </div>
            </section>

            <section className='body-info'>
                <p>
                Projectied (pronounced: "project-tied") is a collaborative management app that allows users to create projects/lists and organize their tasks within each project. Users can add collaborators to their projects, so multiple people can work on them at once. The app offers the following features:
                </p>
                <ul>
                    <li><b>Create projects:</b> Users can create projects/lists and add tasks to them.</li>
                    <li><b>Organize tasks:</b> Within each project, users can organize tasks into three categories: Todo , Active, and Completed.</li>
                    <li><b>Collaborate with others:</b> Users can invite collaborators to their projects/lists, and everyone can work on tasks together.</li>
                </ul>
                
                <p>Responsible for integrating two APIs (Open Brewery DB & Punk API), designing and implementing the user interface, and configuring authentication functionality.</p>

                {/* <div className="video">
                    <h3>Watch the Live Demo!</h3>
                    <iframe src="https://www.youtube.com/embed/U4b1pxl-634" frameBorder="0"></iframe>
                </div> */}
                <div className='technologies'>
                    <h2>Built With</h2>
                    <img src="/assets/SVGs/reactjs-icon.svg" alt="react" />
                    <img src="/assets/SVGs/typescript-icon.svg" alt="typescript" />
                    <img src="/assets/SVGs/supabase-icon.svg" alt="supabase" />
                    <img src="/assets/SVGs/tailwindcss-icon.svg" alt="tailwindcss" />
                </div>
            </section>

        </div>
    )
}