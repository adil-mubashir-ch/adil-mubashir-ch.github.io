import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const Header: React.FC = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [isContactOpen, setIsContactOpen] = useState(false)
    const [copied, setCopied] = useState(false)

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

    const handleContactClick = (e: React.MouseEvent) => {
        e.preventDefault()
        setIsContactOpen(true)
    }

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('adil.mubashir@gmail.com')
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsContactOpen(false)
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    return (
        <>
            <header className="header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
                <div className="traffic-lights">
                    <div className="light red"></div>
                    <div className="light yellow"></div>
                    <div className="light green"></div>
                </div>
                <nav style={{ display: 'flex', gap: '2rem' }}>
                    <a href="#blog" onClick={handleBlogClick} className="nav-link" style={{ cursor: 'pointer' }}>//blog</a>
                    <a href="#contact" onClick={handleContactClick} className="nav-link" style={{ cursor: 'pointer' }}>//contact</a>
                    <a href="https://github.com/adil-mubashir-ch" target="_blank" rel="noopener noreferrer" className="nav-link">//github</a>
                </nav>
            </header>

            {/* Contact Popup Modal */}
            {isContactOpen && (
                <div
                    onClick={() => setIsContactOpen(false)}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        backdropFilter: 'blur(3px)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1000,
                        padding: '1rem'
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            width: '100%',
                            maxWidth: '440px',
                            background: 'var(--card-bg)',
                            border: '1px solid var(--border-color)',
                            borderRadius: '8px',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Modal Header Bar */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '0.6rem 1rem',
                            borderBottom: '1px solid var(--border-color)',
                            background: 'var(--bg-color)'
                        }}>
                            <div
                                className="traffic-lights"
                                style={{ margin: 0, cursor: 'pointer' }}
                                onClick={() => setIsContactOpen(false)}
                                title="Close modal"
                            >
                                <div className="light red"></div>
                                <div className="light yellow"></div>
                                <div className="light green"></div>
                            </div>
                            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                                // contact_info
                            </span>
                            <div style={{ width: '36px' }}></div>
                        </div>

                        {/* Modal Body */}
                        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {/* Email Card */}
                            <div style={{
                                padding: '1rem',
                                border: '1px solid var(--border-color)',
                                borderRadius: '6px',
                                background: 'var(--bg-color)'
                            }}>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600, marginBottom: '0.4rem' }}>
                                    ✉️ Email Address
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    <a
                                        href="mailto:adil.mubashir@gmail.com"
                                        style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-color)', textDecoration: 'none' }}
                                    >
                                        adil.mubashir@gmail.com
                                    </a>
                                    <button
                                        onClick={handleCopyEmail}
                                        style={{
                                            fontSize: '0.75rem',
                                            fontWeight: 600,
                                            padding: '4px 10px',
                                            borderRadius: '4px',
                                            border: '1px solid var(--border-color)',
                                            background: 'var(--card-bg)',
                                            color: 'var(--text-color)',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        {copied ? 'Copied! ✓' : 'Copy'}
                                    </button>
                                </div>
                            </div>

                            {/* LinkedIn Card */}
                            <div style={{
                                padding: '1rem',
                                border: '1px solid var(--border-color)',
                                borderRadius: '6px',
                                background: 'var(--bg-color)'
                            }}>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600, marginBottom: '0.4rem' }}>
                                    💼 LinkedIn Profile
                                </div>
                                <div>
                                    <a
                                        href="https://www.linkedin.com/in/adil-mubashir-chaudhry/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-color)', textDecoration: 'none', wordBreak: 'break-all' }}
                                    >
                                        linkedin.com/in/adil-mubashir-chaudhry &rarr;
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Header
