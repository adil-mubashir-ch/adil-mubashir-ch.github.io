import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
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
        <Projects />
        <Blog />
      </div>
    </>
  )
}

export default App
