import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Publications from './components/Publications'
import Projects from './components/Projects'
import Blog from './components/Blog'
import BlogPost from './components/BlogPost'

function HomePage() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Publications />
      <Projects />
      <Blog />
    </div>
  )
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/llm-raspberry-pi-zero-2w" element={<BlogPost />} />
      </Routes>
    </HashRouter>
  )
}

export default App
