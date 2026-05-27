import React from 'react'

const About: React.FC = () => {
    return (
        <section id="about">
            <h2 className="section-title">// about</h2>
            <div className="content">
                <p>
                    hi, i'm adil. i'm a senior consultant specializing in ai/ml, with experience across
                    agentic systems, computer vision, and model optimization for production and edge deployment.
                    currently at kpmg mesa region, with an ms in artificial intelligence from lums.
                </p>
                <br />
                <p>
                    experienced in:
                    <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
                        <li>quantization, knowledge distillation, and neural network compression</li>
                        <li>rag, llm prompt engineering, and multi-agent systems</li>
                        <li>computer vision (yolo, efficientnet) and traditional ml</li>
                        <li>quantum ml, nas, and edge ai (pytorch, tensorflow, qiskit)</li>
                    </ul>
                </p>
            </div>
        </section>
    )
}

export default About
