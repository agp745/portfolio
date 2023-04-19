import '../css/Projects.css'
import { NavLink } from 'react-router-dom'

function Card({ project }) {
    
    return(
        <>
            <div className="card">
                <img src={project.imageURL} class="project-image"/>
                <div>{project.title}</div>
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
    }

    const projectied = {
        title: "Projectied",
        description: "Collaborative management app that allows uses to create projects/lists and organize their tasks within each project",
        imageURL: "/assets/projectied-img.png",
        link: "https://projectied.onrender.com"
    }
    
    return(
        <section class="content" id="projects">
            <h1 className="subheader">Projects</h1>
                <div className="cardsList">
                    <NavLink to="/mgl" className="card-link"><Card project={mgl}/></NavLink>
                    <NavLink to="/projectied" className="card-link"><Card project={projectied}/></NavLink>
                </div>
        </section>
    )
}