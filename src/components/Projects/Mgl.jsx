import '../../css/project.css'
import HeaderProjects from './HeaderProjects'

export default function Mgl() {
    return(
        <div className='project-body'>
            <HeaderProjects />
            <section className="main-info">
                <div className="left">
                    <img src="/assets/mgl-img.png"/>
                </div>
                <div className="right">
                    <h1>My Gamer List</h1>
                    <div><i>repo:</i> <a href="https://github.com/agp745/MyGamerListApp" target="_blank" className='main-link'>github.com/agp745/MyGamerListApp</a></div>
                    <div><i>website:</i> <a href="https://mygamerlist.onrender.com/" target="_blank" className='main-link'>mygamerlist.onrender.com</a></div>
                </div>
            </section>

            <section className='body-info'>
                <p>
                MyGamerList allows users to access a database of over 500,000+ video games from all platforms. Users can simply search for a title they're looking for, generate a list of games based on filters, and generate completley random games.
                </p>
                <p>
                The gaming culrue and industry has been growing nearly exponentioally year after year. However, gamers still do not have a standarized and streamlined application to discover new (and forgotten) experiences. This is where MyGamerList comes in. We sought out to create a web application which allows gamers to easily discover nearly 1,000,000 video games! Every game from AAA giants to the most obscure indie games are available to you at your fingertips. We hope to galvanize a new culture of gamers who aim to seek out new experiences and to celebrate the diversity that our great hobby offers us.
                </p>
                <p>On this project, I was responsible for developing the end-to-end functionality, including API integration and creation of pop-out menus</p>
                <div className='technologies'>
                    <h2>Built With</h2>
                    <img src="/assets/SVGs/html5-icon.svg" alt="HTML5" />
                    <img src="/assets/SVGs/css3-icon.svg" alt="CSS3" />
                    <img src="/assets/SVGs/tailwindcss-icon.svg" alt="TailwindCSS" />
                    <img src="/assets/SVGs/javascript-icon.svg" alt="JavaScript" />
                </div>
            </section>
        </div>
    )
}