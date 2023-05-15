import '../css/Projects.css'
import { Link } from 'react-router-dom'

function Card({ project }) {

    // const mappedTechs = project.techs.map((tech, idx) => {
    //     return <div key={idx} className='tech'>
    //         <div>{tech}</div>
    //     </div>
    // })
    
    
    return(
        <>
            <div className="card">
                <img src={project.imageURL} class="project-image"/>
                <div>{project.title}</div>
                {/* <div className='techsList'>
                    {mappedTechs}
                </div> */}
            </div>
        </>
    )
}

export default function Projects() {

    const mgl = {
        title: "My Gamer List",
        description: "Video game database search app for Gamers to help and encourage discovery of new (& old) gaming experiences",
        imageURL: "/assets/mgl-img.png",
        link: "https://mygamerlist.onrender.com",
        techs: ['html5', 'css3', 'tailwindCSS','javascript']
    }

    const projectied = {
        title: "Projectied",
        description: "Collaborative management app that allows uses to create projects/lists and organize their tasks within each project",
        imageURL: "/assets/projectied-img.png",
        link: "https://projectied.onrender.com",
        techs: ['html5', 'css3', 'javascript', 'nodejs', 'postgreSQL', 'auth0']
    }

    const pubcrawl = {
        title: "Pub Crawl",
        description: "",
        imageURL: '/assets/pubcrawl-img.png',
        link: '',
        techs: ['typescript', 'react', 'tailwindcss', 'supabase']
    }
    
    return(
        <section class="content" id="projects">
            <h1 className="subheader">Projects</h1>
                <div className="cardsList">
                    <Link to="/mgl" className="card-link"><Card project={mgl}/></Link>
                    <Link to="/projectied" className="card-link"><Card project={projectied}/></Link>
                    <Link to="/pubcrawl" className="card-link"><Card project={pubcrawl}/></Link>
                </div>
        </section>
    )
}