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
                    title="masters thesis - optimization of deep learning models"
                    description="exploring quantization, pruning, and knowledge distillation for edge devices. implementing data-free analytical solutions and multi-teacher architectures."
                    tech={['pytorch', 'quantization', 'knowledge distillation']}
                />
                <ProjectCard
                    title="brain computer interfacing (fyp)"
                    description="created a bci system acquiring eeg data to infer 6 unique brain signals with >88% accuracy using 1-d cnn on edge."
                    tech={['bci', 'edge ai', 'cnn', 'python']}
                />
                <ProjectCard
                    title="hardware aware quantum svm through nas"
                    description="developed nas algorithm for quantum ansatz generation tailored for hardware, achieving ~90% accuracy on breast cancer dataset."
                    tech={['quantum computing', 'nas', 'python']}
                />
                <ProjectCard
                    title="quantization aware knowledge distillation"
                    description="implemented qakd paper and extended research with multi-teacher configurations."
                    tech={['model compression', 'research']}
                />
                <ProjectCard
                    title="ai khaata"
                    description="urdu voice inventory management chatbot with stt, sql generation, and tts."
                    tech={['nlp', 'urdu', 'sql', 'python']}
                />
            </div>
        </section>
    )
}

export default Projects
