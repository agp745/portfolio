import '../css/Header.css'
import { Link } from 'react-scroll'

function Header() {

    return(
        <nav class="header">
            <div className="nav-item"><Link to='about' smooth={true} duration={1000}>about</Link></div>
            <div className="nav-item"><Link to='projects' smooth={true} duration={1000}>projects</Link></div>
            <div className="nav-item"><Link to='contact' smooth={true} duration={1000}>contact</Link></div>
            <div>|</div>
            <div className="nav-item"><a href="https://github.com/agp745" target="_blank">github</a></div>
            <div className="nav-item"><a href="https://www.linkedin.com/in/alejandro-perez-dev745/" target="_blank">linkedin</a></div>
            <div className='nav-item'><a href="/resume.pdf" target="_blank" rel='noopener noreferrer'>resume</a></div>
        </nav>
    )
}

export default Header