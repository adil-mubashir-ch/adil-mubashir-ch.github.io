import React from 'react'

const Blog: React.FC = () => {
    return (
        <section id="blog">
            <h2 className="section-title">// technical blog</h2>
            <div style={{
                padding: '2rem',
                border: '1px dashed var(--border-color)',
                textAlign: 'center',
                color: 'var(--text-secondary)'
            }}>
                <p>/* coming soon... */</p>
                <p>stay tuned for deep dives into edge ai and quantization.</p>
            </div>
        </section>
    )
}

export default Blog
