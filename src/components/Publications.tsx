import React from 'react'

interface PublicationProps {
    title: string;
    venue: string;
    year: string;
    link: string;
    description: string[];
}

const Publication: React.FC<PublicationProps> = ({ title, venue, year, link, description }) => {
    return (
        <div className="publication" style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <h3 style={{ fontSize: '1.1rem' }}>
                    <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
                </h3>
                <span style={{ color: 'var(--text-secondary)', fontFamily: 'monospace' }}>{year}</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{venue}</p>
            <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
                {description.map((item, index) => (
                    <li key={index} style={{ marginBottom: '0.25rem' }}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

const Publications: React.FC = () => {
    return (
        <section id="publications">
            <h2 className="section-title">// publications</h2>
            <Publication
                title="hardware-aware neural architecture search for qsvm"
                venue="arxiv:2604.07856"
                year="2026"
                link="https://arxiv.org/abs/2604.07856"
                description={[
                    "developed a hardware-aware nas approach using genetic algorithms to design quantum svm feature maps natively executable on ibm torino processors.",
                    "achieved 91.23% accuracy on uci breast cancer dataset using 10 qubits with zero transpilation overhead, representing a 27% improvement over hand-crafted quantum circuits.",
                ]}
            />
        </section>
    )
}

export default Publications
