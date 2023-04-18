import '../css/Header.css'

function Header() {

    return(
        <nav class="header">
            <div className="nav-item"><a href="#">about me</a></div>
            <div className="nav-item"><a href="https://github.com/agp745" target="_blank">github</a></div>
            <div className="nav-item"><a href="https://www.linkedin.com/in/alejandro-perez-dev745/" target="_blank">linkedin</a></div>
            <div className="nav-item"><a href="#contact">contact</a></div>
            <div className='nav-item'><a>resume</a></div>
        </nav>
    )
}

export default Header