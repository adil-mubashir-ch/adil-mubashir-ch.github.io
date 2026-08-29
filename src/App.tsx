import { useEffect } from 'react'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Publications from './components/Publications'
import Projects from './components/Projects'
import Blog from './components/Blog'
import BlogPost from './components/BlogPost'
import BlogPostMemoryWall from './components/BlogPostMemoryWall'

function HomePage() {
  const location = useLocation()

  useEffect(() => {
    if (location.state && (location.state as { scrollTo?: string }).scrollTo === 'blog') {
      setTimeout(() => {
        document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [location])

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
        <Route path="/blog/why-4-cores-arent-4x-faster" element={<BlogPostMemoryWall />} />
      </Routes>
    </HashRouter>
  )
}

export default App
