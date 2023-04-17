function Card({ project }) {
    
    return(
        <>
            <div className="card">
                <img src={project.imageURL} class="project-image"/>
                <div>{project.title}</div>
                <p>{project.description}</p>
                <a href={project.link} target="_blank">{project.link}</a>
            </div>
        </>
    )
}

export default Card