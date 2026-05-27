import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Publications from './components/Publications'
import Projects from './components/Projects'
import Blog from './components/Blog'

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Hero />
        <About />
        <Experience />
        <Publications />
        <Projects />
        <Blog />
      </div>
    </>
  )
}

export default App
