import React from 'react'

const Hero: React.FC = () => {
    return (
        <section className="hero" style={{ textAlign: 'center', marginBottom: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem' }}>
            <div className="profile-image-container">
                {/* Placeholder for profile image */}
                <div style={{ width: '150px', height: '150px', borderRadius: '50%', background: '#ccc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span>AMC</span>
                </div>
            </div>
            <div className="hero-text" style={{ textAlign: 'left' }}>
                <h1 style={{ fontSize: '2.5rem', fontFamily: 'monospace' }}>&lt;Adil Mubashir Chaudhry&gt;</h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>// Associate Data Scientist</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>// MS Artificial Intelligence @ LUMS</p>
            </div>
        </section>
    )
}

export default Hero
