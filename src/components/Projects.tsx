import React from 'react'

interface ProjectProps {
    title: string;
    description: string;
    tech?: string[];
    link?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, tech, link }) => {
    return (
        <div className="project-card" style={{
            border: '1px solid var(--border-color)',
            padding: '1.5rem',
            marginBottom: '1.5rem',
            background: 'var(--bg-color)',
            borderRadius: '4px'
        }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                {link ? <a href={link} target="_blank" rel="noopener noreferrer">{title}</a> : title}
            </h3>
            <p style={{ marginBottom: '1rem', fontSize: '0.95rem' }}>{description}</p>
            {tech && (
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {tech.map((t, i) => (
                        <span key={i} style={{
                            fontSize: '0.8rem',
                            background: 'var(--border-color)',
                            padding: '2px 6px',
                            borderRadius: '4px'
                        }}>
                            {t}
                        </span>
                    ))}
                </div>
            )}
        </div>
    )
}

const Projects: React.FC = () => {
    return (
        <section id="projects">
            <h2 className="section-title">// projects</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                <ProjectCard
                    title="masters thesis - quantization aware knowledge distillation"
                    description="optimization of deep learning models via qakd. achieved sota on resnet-32 (cifar-100), outperforming sqakd and quantized feature distillation benchmarks."
                    tech={['pytorch', 'quantization', 'knowledge distillation']}
                />
                <ProjectCard
                    title="virtue foundation - medical facility intelligence"
                    description="ranked top 10 out of 3000+ applicants at mit hackathon; built an agentic rag system (faiss) to identify global medical deserts."
                    tech={['rag', 'faiss', 'agentic ai']}
                />
                <ProjectCard
                    title="brain computer interfacing (fyp)"
                    description="implemented an eeg-based system using 1-d cnns for edge inference, achieving 88% accuracy on 6 unique brain signals."
                    tech={['bci', 'edge ai', 'cnn', 'python']}
                />
                <ProjectCard
                    title="al khaata - urdu voice inventory management"
                    description="engineered a voice chatbot with urdu stt/tts and automated sql query generation."
                    tech={['nlp', 'urdu', 'sql', 'python']}
                />
            </div>
        </section>
    )
}

export default Projects
