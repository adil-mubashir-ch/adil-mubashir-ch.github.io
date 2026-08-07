import React from 'react'
import { Link } from 'react-router-dom'

const BlogSummary: React.FC = () => {
    return (
        <div className="blog-card" style={{
            border: '1px solid var(--border-color)',
            borderRadius: '6px',
            padding: '1.5rem',
            background: 'var(--bg-color)',
            marginBottom: '1.5rem'
        }}>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.8rem' }}>
                <span style={{ fontSize: '0.75rem', padding: '2px 8px', borderRadius: '4px', background: 'var(--border-color)', fontWeight: 600 }}>
                    #EdgeAI
                </span>
                <span style={{ fontSize: '0.75rem', padding: '2px 8px', borderRadius: '4px', background: 'var(--border-color)', fontWeight: 600 }}>
                    #Quantization
                </span>
                <span style={{ fontSize: '0.75rem', padding: '2px 8px', borderRadius: '4px', background: 'var(--border-color)', fontWeight: 600 }}>
                    #RaspberryPi
                </span>
                <span style={{ fontSize: '0.75rem', padding: '2px 8px', borderRadius: '4px', background: 'var(--border-color)', fontWeight: 600 }}>
                    #LLM
                </span>
            </div>

            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                <Link to="/blog/llm-raspberry-pi-zero-2w" style={{ textDecoration: 'none', color: 'inherit' }}>
                    Exploring LLM Performance on Constrained Hardware: Running a Local LLM on a Raspberry Pi Zero 2 W
                </Link>
            </h3>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem', lineHeight: 1.5 }}>
                A step-by-step deep dive into running Karpathy's <code>llama2.c</code> on a $15 Raspberry Pi Zero 2 W. Explores multithreading bottlenecks, SIMD vectorization, and how INT8 quantization doubled inference speed from 22.6 to 47.9 tokens/sec.
            </p>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>August 2026 • 5 min read</span>
                <Link
                    to="/blog/llm-raspberry-pi-zero-2w"
                    style={{
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'var(--text-color)',
                        textDecoration: 'none',
                        border: '1px solid var(--border-color)',
                        padding: '4px 12px',
                        borderRadius: '4px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                    }}
                >
                    Read full post &rarr;
                </Link>
            </div>
        </div>
    )
}

export default BlogSummary
