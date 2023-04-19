import '../../css/project.css'
import HeaderProjects from './HeaderProjects'

export default function Projectied() {
     return(
        <div className="project-body">
            <HeaderProjects />
            <section className="main-info">
                <div className="left">
                    <img src="./src/assets/projectied-img.png"/>
                </div>
                <div className="right">
                    <h1>Projectied</h1>
                    <div><i>repo:</i> <a href="https://github.com/agp745/projectied" className='main-link'>github.com/agp745/projectied</a></div>
                    <div><i>website:</i> <a href="https://projectied.onrender.com/" className='main-link'>projectied.onrender.com</a></div>
                    <div><i>live demo:</i> <a href="https://youtu.be/U4b1pxl-634" className='main-link'>youtu.be/U4b1pxl-634</a></div>
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
                
                <p>My primary responsibilities on this project included implementation of the entire backend, including database and authentication, and API implementation to enable real-time updates</p>

                <div className="video">
                    <h3>Watch the Live Demo!</h3>
                    <iframe src="https://www.youtube.com/embed/U4b1pxl-634" frameBorder="0"></iframe>
                </div>
                <div className='technologies'>
                    <h2>Built With</h2>
                    <img src="./src/assets/SVGs/html5-icon.svg" alt="HTML5" />
                    <img src="./src/assets/SVGs/css3-icon.svg" alt="CSS3" />
                    <img src="./src/assets/SVGs/javascript-icon.svg" alt="JavaScript" />
                    <img src="./src/assets/SVGs/nodejs-icon.svg" alt="Node.js" />
                    <img src="./src/assets/SVGs/postgresql-icon.svg" alt="PostgreSQL" />
                    <img src="./src/assets/SVGs/auth0-icon.svg" alt="Auth0" />
                </div>
            </section>

        </div>
     )
}