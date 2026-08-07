import React from 'react'

const Header: React.FC = () => {
    return (
        <header className="header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
            <div className="traffic-lights">
                <div className="light red"></div>
                <div className="light yellow"></div>
                <div className="light green"></div>
            </div>
            <nav style={{ display: 'flex', gap: '2rem' }}>
                <a href="#portfolio" className="nav-link">//portfolio</a>
                <a href="#blog" className="nav-link">//blog</a>
                <a href="mailto:adil.mubashir@gmail.com" className="nav-link">//contact</a>
                <a href="https://github.com/adil-mubashir-ch" target="_blank" rel="noopener noreferrer" className="nav-link">//github</a>
            </nav>
        </header>
    )
}

export default Header
