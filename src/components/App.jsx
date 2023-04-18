import '../css/App.css'
import Header from './Header'
import Projects from './Projects'
import Hero from './Hero'
import Contact from './Contact'
import Skills from './Skills'

function App() {

  return (
    <div className="App">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <section className="gap"> </section>
      <Contact id="contact"/>
      <section className='gap2'> </section>
    </div>
  )
}

export default App
