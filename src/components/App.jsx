import '../css/App.css'
import Header from './Header'
import Projects from './Projects'
import Hero from './Hero'
import Contact from './Contact'

function App() {

  return (
    <div className="App">
      <Header />
      <Hero />
      <Projects />
      <section className="gap"> </section>
      <Contact id="contact"/>
    </div>
  )
}

export default App
