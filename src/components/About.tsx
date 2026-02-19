import React from 'react'

const About: React.FC = () => {
    return (
        <section id="about">
            <h2 className="section-title">// about</h2>
            <div className="content">
                <p>
                    hi, i'm adil. i'm an associate data scientist specializing in artificial intelligence and deep learning.
                    i enjoy building intelligent agents and optimizing models for edge devices.
                    currently pursuing my ms in artificial intelligence from lums.
                </p>
                <br />
                <p>
                    experienced in:
                    <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
                        <li>large language models (claude, gpt)</li>
                        <li>deep learning (pytorch, tensorflow)</li>
                        <li>model optimization (quantization, pruning)</li>
                        <li>software development (python, react)</li>
                    </ul>
                </p>
            </div>
        </section>
    )
}

export default About
