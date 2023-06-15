import '../../css/project.css'
import HeaderProjects from './HeaderProjects'

export default function EzGo() {
     return(
        <div className="project-body">
            <HeaderProjects />
            <section className="main-info">
                <div className="left">
                    <img src="/assets/ezgo.png"/>
                </div>
                <div className="right">
                    <h1>EzGo</h1>
                    <div><i>repo:</i> <a href="https://github.com/agp745/EzGo" target="_blank" className='main-link'>github.com/agp745/EzGo</a></div>
                    <div><i>website:</i> <a href="https://ezgo.vercel.app/" target="_blank" className='main-link'>ezgo.vercel.app</a></div>
                    <div><i>live demo:</i> <a href="https://youtu.be/UDdly65WQ7o" target="_blank" className='main-link'>https://youtu.be/UDdly65WQ7o</a></div>
                </div>
            </section>

            <section className='body-info'>
                <p>
                EzGo is a project aimed at providing users with a platform to plan their commutes using eco-friendly modes of transportation.&nbsp;
                Our app offers the following features:
                </p>
                <ul>
                    <li><b>Plan a Route:</b> Users can easily plan their commutes by selecting eco-friendly modes of transportation such as transit, biking, and walking.</li>
                    <li><b>Check Savings:</b> Users have the ability to input their commutes and view how much money, time, and CO2 emissions they can save by opting for sustainable transportation alternatives instead of driving.</li>
                    <li><b>Login/Register:</b> To enhance user experience and enable route management, the platform provides a login/register functionality. Users can sign up using their Google account or email address.</li>
                </ul>
                
                <p>Responsible for integrating oAuth authentication, UX/UI, and Google Maps API implementation</p>

                <div className="video">
                    <h3>Watch the Live Demo!</h3>
                    <iframe width="868" height="488" src="https://www.youtube.com/embed/UDdly65WQ7o" title="EzGo Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className='technologies'>
                    <h2>Built With</h2>
                    <img src="/assets/SVGs/nextjs-icon.svg" alt="HTML5" />
                    <img src="/assets/SVGs/tailwindcss-icon.svg" alt="TailwindCSS" />
                    <img src="/assets/SVGs/mongodb-icon.svg" alt="MongoDB" />
                </div>
            </section>

        </div>
     )
}