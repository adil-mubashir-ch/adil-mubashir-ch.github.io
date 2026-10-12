import React from 'react'

interface AchievementProps {
    title: string;
    event: string;
    year: string;
    link?: string;
    description: string[];
}

const Achievement: React.FC<AchievementProps> = ({ title, event, year, link, description }) => {
    return (
        <div className="achievement" style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 500 }}>
                    {link ? <a href={link} target="_blank" rel="noopener noreferrer">{title}</a> : title}
                </h3>
                <span style={{ color: 'var(--text-secondary)', fontFamily: 'monospace' }}>{year}</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{event}</p>
            <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
                {description.map((item, index) => (
                    <li key={index} style={{ marginBottom: '0.25rem' }}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

const Achievements: React.FC = () => {
    return (
        <section id="achievements">
            <h2 className="section-title">// achievements</h2>
            <Achievement
                title="5th place globally - roboracer sim racing league"
                event="ieee/rsj iros 2026 · team barq racing"
                year="2026"
                link="https://autodrive-ecosystem.github.io/competitions/roboracer-sim-racing-iros-2026/"
                description={[
                    "placed 5th in the final time-attack race (4th in qualification) of the 6th roboracer sim racing league at iros 2026, competing against 50+ international teams.",
                    "designed and implemented real-time trajectory planning, perception, and optimal race-line control for a high-speed autonomous racing vehicle.",
                ]}
            />
            <Achievement
                title="top 10 finalist - mit hackathon"
                event="virtue foundation"
                year="2025"
                description={[
                    "selected in the top 10 out of 3,000+ global participants; built an agentic rag intelligence system (faiss) to detect medical deserts.",
                ]}
            />
        </section>
    )
}

export default Achievements
