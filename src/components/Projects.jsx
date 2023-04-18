import '../css/Projects.css'
import Card from './Card'

function Projects() {

    const mgl = {
        title: "My Gamer List",
        description: "Video game database search app for Gamers to help and encourage discovery of new (& old) gaming experiences",
        imageURL: "./src/assets/mgl-img.png",
        link: "https://mygamerlist.onrender.com",
    }

    const projectied = {
        title: "Projectied",
        description: "Collaborative management app that allows uses to create projects/lists and organize their tasks within each project",
        imageURL: "./src/assets/projectied-img.png",
        link: "https://projectied.onrender.com"
    }
    
    return(
        <section class="content" id="projects">
            <h1 className="subheader">Projects</h1>
            <div className="cardsList">
                <Card project={mgl}/>
                <Card project={projectied}/>
            </div>
        </section>
    )
}

export default Projects