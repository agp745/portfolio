import { NavLink } from "react-router-dom"
import '../../css/Header.css'

export default function HeaderProjects() {
    return(
        <section className="header">
            <NavLink to="/" className="nav-item">Home</NavLink>
            <div>|</div>
            <div className="nav-item"><a href="https://github.com/agp745" target="_blank">github</a></div>
            <div className="nav-item"><a href="https://www.linkedin.com/in/alejandro-perez-dev745/" target="_blank">linkedin</a></div>
            <div className='nav-item'><a href="/resume.pdf" target="_blank" rel='noopener noreferrer'>resume</a></div>
        </section>
    )
}