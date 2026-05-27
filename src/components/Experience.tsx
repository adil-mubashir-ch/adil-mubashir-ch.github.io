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
            {description.length > 0 && (
                <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
                    {description.map((item, index) => (
                        <li key={index} style={{ marginBottom: '0.25rem' }}>{item}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

const Experience: React.FC = () => {
    return (
        <section id="experience">
            <h2 className="section-title">// experience</h2>

            <Job
                role="senior consultant - ai/ml"
                company="kpmg"
                period="jun 2026 - present"
                description={[
                    "developed end-to-end poc and productionized applications for agentic ai use cases.",
                    "served as a consultant for kpmg middle east ai initiatives.",
                ]}
            />

            <Job
                role="associate data scientist ii"
                company="venturedive"
                period="jan 2026 - may 2026"
                description={[
                    "developed an end-to-end computer vision pipeline for retail planogram compliance using yolo and efficientnet; integrated deeplsd for automated perspective dewarping.",
                    "maintained and retrained production models for fmcg clients, ensuring robust performance against field-image degradation and new packaging variants above 85% accuracy.",
                    "optimized penalty exposure for a major middle eastern call center through root cause and calibration analysis, significantly reducing operational penalty risks for ministry-level projects.",
                ]}
            />

            <Job
                role="associate data scientist i"
                company="venturedive"
                period="feb 2025 - dec 2025"
                description={[
                    "architected a recommender system for a leading middle eastern bank, resulting in a 3x increase in sales within the first month of deployment.",
                    "engineered advanced prompts for multi-agent llm systems using claude sonnet/haiku, achieving >85% accuracy in automated extraction and travel booking tasks.",
                    "built and maintained credit risk assessment models with an 80% f1-score using traditional ml techniques.",
                ]}
            />

            <Job
                role="research assistant"
                company="marine and aerial robotics lab"
                period="mar 2023 - mar 2024"
                description={[
                    "researched rtos development and ported freertos on renesas rh850 family microcontrollers.",
                ]}
            />

            <h2 className="section-title" style={{ marginTop: '3rem' }}>// education</h2>
            <Job
                role="ms artificial intelligence"
                company="lums"
                period="sep 2024 - jun 2026"
                description={[
                    "thesis: optimization of deep learning models via quantization aware knowledge distillation.",
                    "achieved sota performance on resnet-32 (cifar-100), outperforming existing benchmarks like sqakd and quantized feature distillation.",
                    "coursework: machine learning, data engineering, edge ai, robotics, llms, quantum ml.",
                ]}
            />
            <Job
                role="bs electrical engineering"
                company="fast nuces"
                period="aug 2020 - jun 2024"
                description={[
                    "coursework: embedded systems, oop, data structures & algorithms, databases, computer architecture, machine learning.",
                    "research: robotics, brain computer interfacing, tinyml.",
                ]}
            />
        </section>
    )
}

export default Experience
