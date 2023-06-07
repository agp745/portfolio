import HeaderProjects from "./HeaderProjects"

export default function PubCrawl() {

    return (
        <div className="project-body">
            <HeaderProjects />
            <section className="main-info">
                <div className="left">
                    <img src="/assets/pubcrawl-img.png"/>
                </div>
                <div className="right">
                    <h1>Pub Crawl</h1>
                    <div><i>repo:</i> <a href="https://github.com/agp745/PubCrawl" target="_blank" className='main-link'>github.com/agp745/PubCrawl</a></div>
                    <div><i>website:</i> <a href="https://pubcrawl.vercel.app/" target="_blank" className='main-link'>pubcrawl.vercel.app/</a></div>
                    {/* <div><i>live demo:</i> <a href="" target="_blank" className='main-link'>tbd</a></div> */}
                </div>
            </section>

            <section className='body-info'>
                <p>
                Welcome to Pub Crawl, an app that helps you find breweries and discover beers! This app allows users to explore breweries near their location or in any city worldwide. It also provides detailed information about each beer, including its ABV (Alcohol by Volume), IBU (International Bitterness Units), and more. Users can take advantage of the passwordless login process powered by Supabase and save their favorite beers to their profile. The app offers the following features:
                </p>
                <ul>
                    <li>Find breweries near your current location or in any city around the world.</li>
                    <li>Discover beers and get detailed information about each beer, including ABV, IBU, and more.</li>
                    <li>Passwordless login process powered by Supabase for seamless authentication.</li>
                    <li>Save interesting beers to your profile for future reference.</li>
                </ul>
                
                <p>Responsible for integrating two APIs (Open Brewery DB & Punk API), designing and implementing the user interface, and configuring authentication functionality.</p>

                {/* <div className="video">
                    <h3>Watch the Live Demo!</h3>
                    <iframe src="https://www.youtube.com/embed/U4b1pxl-634" frameBorder="0"></iframe>
                </div> */}
                <div className='technologies'>
                    <h2>Built With</h2>
                    <img src="/assets/SVGs/reactjs-icon.svg" alt="react" />
                    <img src="/assets/SVGs/typescript-icon.svg" alt="typescript" />
                    <img src="/assets/SVGs/supabase-icon.svg" alt="supabase" />
                    <img src="/assets/SVGs/tailwindcss-icon.svg" alt="tailwindcss" />
                </div>
            </section>

        </div>
    )
}