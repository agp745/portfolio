import '../css/AboutMe.css'

function AboutMe() {

    const text = (
        <>
            <p>I am a recent graduate of the Moores School of Music at the University of Houston, where I studied composition, classical saxophone, and conducting. During my time there, I gained valuable experience working with ensembles to perform and conduct new music, developing my leadership and teamwork skills along the way.</p>
        
            <p>Currently, I am studying Full Stack web development at DigitalCrafts, where I am learning and working with modern web technologies such as Typescript, Node.js, PostgreSQL, and React. Through this program, I have developed strong problem-solving and debugging skills and am excited to apply them to real-world projects.</p>
        
            <p>As I continue to grow and develop my skills as a developer, I am eager to contribute to the tech field and make a meaningful impact on the world. I am actively seeking new opportunities to apply my skills and expertise, and I would love to connect with others who share my passion for technology and innovation.</p>
        </>
    )

    return(
        <section className='about-section'>
            <h1 className='about-title'>About Me</h1>
            <div className="about-me">
                <div className='side-content'>
                    <img src="./src/assets/portfolio-headshot.png" className='headshot' />
                    <h2 className='about-name'>Alejandro (Alex) Perez</h2>
                    <div className='about-job'>Software Developer</div>
                    <div className='about-job'>Houston, TX</div>
                    <div className='phone-email'>
                        (832) 259-3990 | alejandro.gperez745@gmail.com
                    </div>
                </div>
                <div className='main-content'>
                    <div>{text}</div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe