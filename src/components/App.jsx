import '../css/App.css'
import Header from './Header'
import Projects from './Projects'
import Hero from './Hero'
import Contact from './Contact'
import Skills from './Skills'
import AboutMe from './AboutMe'

function App() {

  return (
    <div className="App">
      <Header />
      <Hero />
      <Skills />
      <section className='gap'></section>
      <AboutMe />
      <section className='gap2'></section>
      <Projects />
      <section className="gap3"> </section>
      <Contact id="contact"/>
      <section className='gap4'> </section>
    </div>
  )
}

export default App
