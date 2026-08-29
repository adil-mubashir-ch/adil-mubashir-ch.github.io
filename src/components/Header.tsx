import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const Header: React.FC = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const handleBlogClick = (e: React.MouseEvent) => {
        e.preventDefault()
        if (location.pathname === '/') {
            const blogSection = document.getElementById('blog')
            if (blogSection) {
                blogSection.scrollIntoView({ behavior: 'smooth' })
            }
        } else {
            navigate('/', { state: { scrollTo: 'blog' } })
        }
    }

    return (
        <header className="header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
            <div className="traffic-lights">
                <div className="light red"></div>
                <div className="light yellow"></div>
                <div className="light green"></div>
            </div>
            <nav style={{ display: 'flex', gap: '2rem' }}>
                <a href="#blog" onClick={handleBlogClick} className="nav-link" style={{ cursor: 'pointer' }}>//blog</a>
                <a href="mailto:adil.mubashir@gmail.com" className="nav-link">//contact</a>
                <a href="https://github.com/adil-mubashir-ch" target="_blank" rel="noopener noreferrer" className="nav-link">//github</a>
            </nav>
        </header>
    )
}

export default Header
