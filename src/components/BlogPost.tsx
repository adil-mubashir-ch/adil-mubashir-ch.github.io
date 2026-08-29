import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

interface CodeBlockProps {
    code: string;
    language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'bash' }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div style={{
            position: 'relative',
            margin: '1.2rem 0',
            borderRadius: '6px',
            overflow: 'hidden',
            border: '1px solid var(--border-color)',
            background: '#1e1e1e',
            color: '#d4d4d4'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.4rem 0.8rem',
                background: '#2d2d2d',
                fontSize: '0.75rem',
                color: '#aaa',
                borderBottom: '1px solid #3c3c3c'
            }}>
                <span>{language}</span>
                <button
                    onClick={handleCopy}
                    style={{
                        background: 'transparent',
                        border: '1px solid #555',
                        color: '#ccc',
                        borderRadius: '3px',
                        padding: '2px 8px',
                        cursor: 'pointer',
                        fontSize: '0.75rem',
                        transition: 'all 0.2s ease'
                    }}
                >
                    {copied ? 'Copied!' : 'Copy'}
                </button>
            </div>
            <pre style={{
                margin: 0,
                padding: '1rem',
                overflowX: 'auto',
                fontSize: '0.88rem',
                fontFamily: 'var(--code-font)',
                lineHeight: 1.45
            }}>
                <code>{code}</code>
            </pre>
        </div>
    );
};

export const BlogPost: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container" style={{ marginTop: '2rem' }}>
            {/* Top Navigation */}
            <nav style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <Link
                    to="/"
                    style={{
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: 'var(--text-color)',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        border: '1px solid var(--border-color)',
                        padding: '6px 14px',
                        borderRadius: '4px',
                        background: 'var(--bg-color)'
                    }}
                >
                    &larr; Back to Home
                </Link>
            </nav>

            {/* Series Link Banner */}
            <div style={{
                padding: '0.8rem 1.2rem',
                marginBottom: '1.5rem',
                borderRadius: '6px',
                background: 'var(--card-bg)',
                border: '1px solid var(--border-color)',
                fontSize: '0.88rem'
            }}>
                <span style={{ fontWeight: 600 }}>🔥 Part 2 is out!</span>{' '}
                Want to dive deeper into why 4 CPU cores didn't give a 4x speedup? Check out{' '}
                <Link to="/blog/why-4-cores-arent-4x-faster" style={{ color: 'var(--text-color)', fontWeight: 600 }}>
                    Part 2: Why 4 Cores Aren't 4x Faster: The Local LLM Memory Traffic Jam &rarr;
                </Link>
            </div>

            <article className="blog-post-page" style={{
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                background: 'var(--bg-color)',
                overflow: 'hidden'
            }}>
                {/* Header / Banner */}
                <div style={{
                    padding: '1.8rem 2rem',
                    background: 'var(--card-bg)',
                    borderBottom: '1px solid var(--border-color)'
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

                    <h1 style={{ fontSize: '1.8rem', lineHeight: 1.3, marginBottom: '0.8rem' }}>
                        Exploring LLM Performance on Constrained Hardware: Running a Local LLM on a Raspberry Pi Zero 2 W
                    </h1>

                    <div style={{
                        fontSize: '0.85rem',
                        color: 'var(--text-secondary)'
                    }}>
                        Published by Adil Mubashir • August 2026 • 5 min read
                    </div>
                </div>

                {/* Content Body */}
                <div style={{ padding: '2rem', lineHeight: 1.6, fontSize: '0.95rem' }}>
                    <p style={{ marginTop: 0 }}>
                        Recently, I came across the incredible <code>esp32-ai</code> project, where a developer managed to run a 28.9 million-parameter Large Language Model (LLM) on a tiny $8 ESP32-S3 microcontroller. It used intense flash-memory tricks to bypass the ESP32's 512KB RAM limit.
                    </p>

                    <p>
                        This inspired me to try something similar, but on hardware I already had: a <strong>Raspberry Pi Zero 2 W</strong>. With a 64-bit quad-core ARM Cortex-A53 processor and 512MB of RAM, the Pi Zero 2 W has plenty of space for a small model without needing flash hacks. Using Andrej Karpathy's famous <code>llama2.c</code> repository, I set out to see how fast we could make a 15M parameter "TinyStories" model run locally over an SSH connection.
                    </p>

                    <p>
                        Here is the step-by-step journey of how we optimized the C code to double the inference speed.
                    </p>

                    {/* Performance Overview Chart */}
                    <div style={{
                        margin: '2rem 0',
                        padding: '1.2rem',
                        background: 'var(--card-bg)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '6px',
                        textAlign: 'center'
                    }}>
                        <h4 style={{ margin: '0 0 1rem 0', fontSize: '1rem', color: 'var(--text-color)' }}>
                            📊 Performance Benchmark Summary
                        </h4>
                        <img
                            src="/blog/llm_inference_chart.png"
                            alt="LLM Inference Speed on Raspberry Pi Zero 2 W Bar Chart"
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                                borderRadius: '4px',
                                border: '1px solid var(--border-color)'
                            }}
                        />
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.6rem', marginBottom: 0 }}>
                            Comparison of tokens per second achieved across 1-Core FP32 baseline, 4-Core FP32 multithreading, and 4-Core INT8 quantization.
                        </p>
                    </div>

                    <hr style={{ border: 'none', borderTop: '1px dashed var(--border-color)', margin: '2rem 0' }} />

                    {/* Phase 1 */}
                    <h2 style={{ fontSize: '1.3rem', color: 'var(--text-color)', marginTop: '1.5rem' }}>
                        Phase 1: The Unoptimized Baseline
                    </h2>
                    <p>
                        To start, we clone the reference C implementation and download a pre-trained 15M parameter model.
                    </p>

                    <CodeBlock code={`# Install dependencies
sudo apt update && sudo apt install build-essential git -y

# Clone the inference engine
git clone https://github.com/karpathy/llama2.c.git
cd llama2.c

# Download the 15M parameter TinyStories model
wget https://huggingface.co/karpathy/tinyllamas/resolve/main/stories15M.bin`} />

                    <p>
                        Next, we compile the C code using some standard GCC optimization flags (<code>-O3</code> and <code>-Ofast</code>) and tell the compiler to optimize for our specific ARM chip (<code>-mcpu=cortex-a53</code>).
                    </p>

                    <CodeBlock code={`gcc -O3 -Ofast -mcpu=cortex-a53 run.c -lm -o run`} />

                    <p>Then we run it:</p>

                    <CodeBlock code={`./run stories15M.bin -i "Once upon a time, there was a fluffy rabbit that wanted to eat some carrots"`} />

                    <figure style={{ margin: '1.5rem 0', textAlign: 'center' }}>
                        <img
                            src="/blog/image_e5401d.png"
                            alt="Phase 1 Baseline execution terminal output showing 22.62 tok/s"
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                                borderRadius: '4px',
                                border: '1px solid var(--border-color)'
                            }}
                        />
                        <figcaption style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                            Phase 1 Baseline terminal output achieving <strong>22.62 tokens/sec</strong> on a single CPU core.
                        </figcaption>
                    </figure>

                    <p>
                        <strong>Result:</strong> We hit <strong>22.62 tokens per second</strong>. This is already significantly faster than the ESP32's ~9.8 tokens/sec, but we are only using a single core of the Pi's CPU.
                    </p>

                    <hr style={{ border: 'none', borderTop: '1px dashed var(--border-color)', margin: '2rem 0' }} />

                    {/* Phase 2 */}
                    <h2 style={{ fontSize: '1.3rem', color: 'var(--text-color)', marginTop: '1.5rem' }}>
                        Phase 2: Hitting the Memory Wall
                    </h2>
                    <p>
                        To speed things up, we can throw much more aggressive compiler flags at it to unlock the Pi's multithreading and SIMD (Single Instruction, Multiple Data) capabilities.
                    </p>
                    <p>Here is the ultimate compiler command we used:</p>

                    <CodeBlock code={`gcc -Ofast -O3 -mcpu=cortex-a53 -march=armv8-a+simd -fopenmp -funroll-loops -flto run.c -lm -o run_fast`} />

                    <div style={{
                        background: 'var(--card-bg)',
                        borderLeft: '3px solid var(--text-secondary)',
                        padding: '1rem 1.2rem',
                        margin: '1.2rem 0',
                        borderRadius: '0 4px 4px 0'
                    }}>
                        <strong style={{ display: 'block', marginBottom: '0.5rem' }}>What do these flags actually do?</strong>
                        <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.9rem' }}>
                            <li style={{ marginBottom: '0.3rem' }}>
                                <code>-march=armv8-a+simd</code>: Activates NEON vectorization, allowing the chip to crunch multiple math operations in a single clock cycle.
                            </li>
                            <li style={{ marginBottom: '0.3rem' }}>
                                <code>-fopenmp</code>: Enables Open Multi-Processing to split the heavy matrix multiplications across all 4 CPU cores.
                            </li>
                            <li style={{ marginBottom: '0.3rem' }}>
                                <code>-funroll-loops</code>: Expands repetitive <code>for</code> loops in the code to reduce CPU branching overhead.
                            </li>
                            <li>
                                <code>-flto</code>: Link-Time Optimization, creating a leaner executable by analyzing the whole program at once.
                            </li>
                        </ul>
                    </div>

                    <p>
                        To run this new executable with all four cores, we prepend the execution command with an environment variable:
                    </p>

                    <CodeBlock code={`OMP_NUM_THREADS=4 ./run_fast stories15M.bin -i "Once upon a time, there was a fluffy rabbit that wanted to eat some carrots"`} />

                    <figure style={{ margin: '1.5rem 0', textAlign: 'center' }}>
                        <img
                            src="/blog/image_e538f7.png"
                            alt="Phase 2 Multithreaded execution terminal output showing 24.49 tok/s"
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                                borderRadius: '4px',
                                border: '1px solid var(--border-color)'
                            }}
                        />
                        <figcaption style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                            Phase 2 Multithreaded output achieving <strong>24.49 tokens/sec</strong> across 4 CPU cores.
                        </figcaption>
                    </figure>

                    <p>
                        <strong>Result:</strong> Wait. <strong>24.49 tokens per second</strong>.
                    </p>
                    <p>
                        Despite activating all four cores and vector math, the speed barely budged! Why? We hit the <strong>memory bandwidth wall</strong>. The 32-bit floating-point (FP32) weights of the model are too large for the Pi's LPDDR2 RAM to stream into the CPU fast enough. The four cores were just sitting idle, waiting in a traffic jam for data to arrive.
                    </p>

                    <hr style={{ border: 'none', borderTop: '1px dashed var(--border-color)', margin: '2rem 0' }} />

                    {/* Phase 3 */}
                    <h2 style={{ fontSize: '1.3rem', color: 'var(--text-color)', marginTop: '1.5rem' }}>
                        Phase 3: Breaking the Wall with INT8 Quantization
                    </h2>
                    <p>
                        To fix the memory traffic jam, we need to reduce the amount of data moving through the pipeline. We do this by compressing the model weights from 32-bit floats into 8-bit integers (INT8).
                    </p>
                    <p>
                        Because the Pi Zero 2 W only has 512MB of RAM, trying to load PyTorch locally to convert the model will freeze the board. Instead, we do this step on a laptop (or Google Colab) and transfer the file over.
                    </p>

                    <p style={{ fontWeight: 600, marginBottom: '0.3rem' }}>On the Laptop/Colab:</p>
                    <CodeBlock code={`# Clone repo and download the raw PyTorch model
git clone https://github.com/karpathy/llama2.c.git
cd llama2.c
wget https://huggingface.co/karpathy/tinyllamas/resolve/main/stories15M.pt

# Export a symmetrically quantized INT8 binary
python export.py stories15M_q80.bin --version 2 --checkpoint stories15M.pt`} />

                    <p>
                        We then use Secure Copy (<code>scp</code>) to push the heavily compressed <code>stories15M_q80.bin</code> file to the Pi:
                    </p>
                    <CodeBlock code={`scp "stories15M_q80.bin" adil@<YOUR_PI_IP>:~/llama2.c/`} />

                    <p style={{ fontWeight: 600, marginBottom: '0.3rem' }}>Back on the Raspberry Pi:</p>
                    <p>
                        The standard <code>run.c</code> file cannot read INT8 models, so we must compile <code>runq.c</code> instead, applying all the same aggressive multithreading and SIMD flags:
                    </p>

                    <CodeBlock code={`cd ~/llama2.c
gcc -Ofast -O3 -mcpu=cortex-a53 -march=armv8-a+simd -fopenmp -funroll-loops -flto runq.c -lm -o runq_fast`} />

                    <p>Finally, we run the quantized model on all 4 cores:</p>
                    <CodeBlock code={`OMP_NUM_THREADS=4 ./runq_fast stories15M_q80.bin -i "Once upon a time, there was a fluffy rabbit that wanted to eat some carrots"`} />

                    <figure style={{ margin: '1.5rem 0', textAlign: 'center' }}>
                        <img
                            src="/blog/image_e4cf44.png"
                            alt="Phase 3 INT8 Quantized execution terminal output showing 47.89 tok/s"
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                                borderRadius: '4px',
                                border: '1px solid var(--border-color)'
                            }}
                        />
                        <figcaption style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                            Phase 3 Quantized INT8 execution achieving <strong>47.89 tokens/sec</strong>!
                        </figcaption>
                    </figure>

                    <p>
                        <strong>Result: 47.89 tokens per second! 🚀</strong>
                    </p>
                    <p>
                        By shrinking the weights by 75%, we completely cleared the memory bottleneck. The four CPU cores could finally pull data as fast as they needed, doubling our overall inference speed.
                    </p>

                    <hr style={{ border: 'none', borderTop: '1px dashed var(--border-color)', margin: '2rem 0' }} />

                    {/* Conclusion */}
                    <h2 style={{ fontSize: '1.3rem', color: 'var(--text-color)', marginTop: '1.5rem' }}>
                        Conclusion
                    </h2>
                    <p>
                        Running an LLM locally doesn't always require massive GPUs. With standard C code, a $15 Raspberry Pi Zero 2 W, and a solid understanding of memory bottlenecks and quantization, you can achieve lightning-fast text generation—completely offline and entirely at the edge.
                    </p>
                </div>
            </article>

            {/* Bottom Series Link Banner */}
            <div style={{
                marginTop: '2rem',
                padding: '1.2rem',
                borderRadius: '8px',
                background: 'var(--card-bg)',
                border: '1px solid var(--border-color)',
                textAlign: 'center'
            }}>
                <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem' }}>🚀 Read Part 2 of this Series</h4>
                <p style={{ margin: '0 0 1rem 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    Learn why adding 4 CPU cores only gave a 16.7% boost, how memory bandwidth creates the "Memory Wall", and how INT8 quantization bypasses it.
                </p>
                <Link
                    to="/blog/why-4-cores-arent-4x-faster"
                    style={{
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'var(--text-color)',
                        textDecoration: 'none',
                        border: '1px solid var(--border-color)',
                        padding: '6px 16px',
                        borderRadius: '4px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                    }}
                >
                    Read Part 2: Why 4 Cores Aren't 4x Faster: The Local LLM Memory Traffic Jam &rarr;
                </Link>
            </div>

            {/* Bottom Navigation */}
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                <Link
                    to="/"
                    style={{
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: 'var(--text-color)',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        border: '1px solid var(--border-color)',
                        padding: '6px 14px',
                        borderRadius: '4px',
                        background: 'var(--bg-color)'
                    }}
                >
                    &larr; Back to Home
                </Link>
            </div>
        </div>
    );
};

export default BlogPost;
