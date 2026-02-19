import React from 'react'

interface JobProps {
    role: string;
    company: string;
    period: string;
    description: string[];
}

const Job: React.FC<JobProps> = ({ role, company, period, description }) => {
    return (
        <div className="job" style={{ marginBottom: '2rem' }}>
            <div className="job-header" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '1.1rem' }}>{role} <span style={{ color: 'var(--text-secondary)' }}>@ {company}</span></h3>
                <span style={{ color: 'var(--text-secondary)', fontFamily: 'monospace' }}>{period}</span>
            </div>
            <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
                {description.map((item, index) => (
                    <li key={index} style={{ marginBottom: '0.25rem' }}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

const Experience: React.FC = () => {
    return (
        <section id="experience">
            <h2 className="section-title">// experience</h2>

            <Job
                role="associate data scientist"
                company="venturedive"
                period="feb 2025 - present"
                description={[
                    "engineered precise prompts for multi-agent autonomous travel booking agent using claude sonnet and haiku llms.",
                    "developed / maintained traditional ml models for credit risk assessment achieving a f1 score of 80%.",
                    "built data-driven lead generation model in collaboration with sales stakeholders, increasing banking product conversion rates by 1.5x.",
                    "assisted in developing an ai agent capable of extracting information and filling insurance forms automatically."
                ]}
            />

            <Job
                role="deep learning intern"
                company="bytewise"
                period="mar 2023 - jul 2023"
                description={[
                    "conducted data analysis to evaluate the relationship between avg. household income, ethnicity using the us census dataset.",
                    "applied custom deep learning models with tensorflow and keras to optimize regression and classification performance."
                ]}
            />

            <h2 className="section-title" style={{ marginTop: '3rem' }}>// education</h2>
            <Job
                role="ms artificial intelligence"
                company="lums"
                period="sep 2024 - present"
                description={[]}
            />
            <Job
                role="bs electrical engineering"
                company="fast nuces"
                period="aug 2020 - jun 2024"
                description={[]}
            />
        </section>
    )
}

export default Experience
