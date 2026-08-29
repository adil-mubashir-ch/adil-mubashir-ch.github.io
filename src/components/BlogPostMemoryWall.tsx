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

export const BlogPostMemoryWall: React.FC = () => {
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
                <span style={{ fontWeight: 600 }}>💡 Part 2 of Edge AI Series:</span>{' '}
                This post is an architectural follow-up to our hands-on experiment. Read{' '}
                <Link to="/blog/llm-raspberry-pi-zero-2w" style={{ color: 'var(--text-color)', fontWeight: 600 }}>
                    Part 1: Exploring LLM Performance on Constrained Hardware &rarr;
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
                            #Hardware
                        </span>
                        <span style={{ fontSize: '0.75rem', padding: '2px 8px', borderRadius: '4px', background: 'var(--border-color)', fontWeight: 600 }}>
                            #MemoryBandwidth
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
                        Why 4 Cores Aren't 4x Faster: The Local LLM Memory Traffic Jam
                    </h1>

                    <div style={{
                        fontSize: '0.85rem',
                        color: 'var(--text-secondary)'
                    }}>
                        Published by Adil Mubashir • August 2026 • 6 min read
                    </div>
                </div>

                {/* Content Body */}
                <div style={{ padding: '2rem', lineHeight: 1.6, fontSize: '0.95rem' }}>
                    <p style={{ marginTop: 0 }}>
                        You download a local LLM, fire it up on your machine, and the text generation is sluggish. Naturally, you assume the processor is struggling.
                    </p>
                    <p>
                        You dive into the settings, enable multi-threading, force the application to use all available CPU cores, and run it again.
                    </p>
                    <p style={{ fontStyle: 'italic', fontWeight: 600 }}>
                        The result? It gets faster—but nowhere near as much as you might expect.
                    </p>
                    <p>
                        If this has happened to you, you aren't alone. It's easy to assume that LLM performance is primarily dictated by compute: more FLOPs, more CPU cores, more performance.
                    </p>
                    <p>
                        But during batch-1 autoregressive decoding, another resource can become the real bottleneck: <strong>Memory bandwidth</strong>.
                    </p>

                    <div style={{
                        background: 'var(--card-bg)',
                        borderLeft: '4px solid var(--text-color)',
                        padding: '1rem 1.2rem',
                        margin: '1.5rem 0',
                        borderRadius: '0 6px 6px 0',
                        fontSize: '1.05rem',
                        fontWeight: 600
                    }}>
                        Welcome to the Memory Wall.
                    </div>

                    <hr style={{ border: 'none', borderTop: '1px dashed var(--border-color)', margin: '2rem 0' }} />

                    {/* Section: Reality of Autoregressive Decoding */}
                    <h2 style={{ fontSize: '1.3rem', color: 'var(--text-color)', marginTop: '1.5rem' }}>
                        The Reality of Autoregressive Decoding
                    </h2>
                    <p>
                        Large Language Models generate text one token at a time. This is called <strong>autoregressive decoding</strong>.
                    </p>
                    <p>
                        For every new token, the model performs another forward pass through its layers. A critical part of that computation is reading the model's weights.
                    </p>
                    <p>
                        When the model is much larger than the CPU's caches, a substantial amount of those weights must ultimately be fetched from DRAM during each decoding step.
                    </p>
                    <p style={{ fontWeight: 600 }}>
                        This creates an important constraint: The CPU may have plenty of computational capacity, but it cannot use that capacity if it is waiting for data from memory.
                    </p>
                    <p>
                        That's the memory wall. Adding CPU cores can help when the workload is compute-bound. But all those cores share the same memory subsystem. Once that subsystem becomes the limiting resource, adding more cores gives diminishing returns.
                    </p>

                    <div style={{
                        background: 'var(--card-bg)',
                        border: '1px solid var(--border-color)',
                        padding: '1.2rem',
                        borderRadius: '6px',
                        margin: '1.5rem 0'
                    }}>
                        <strong style={{ fontSize: '0.95rem' }}>🛒 The Grocery Store Analogy</strong>
                        <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                            It's like adding more cashiers to a grocery store when the delivery trucks supplying the store are already struggling to keep up. More cashiers can help a little, but eventually they spend much of their time waiting for inventory.
                        </p>
                    </div>

                    <hr style={{ border: 'none', borderTop: '1px dashed var(--border-color)', margin: '2rem 0' }} />

                    {/* Section: Pi Zero 2 W Experiment */}
                    <h2 style={{ fontSize: '1.3rem', color: 'var(--text-color)', marginTop: '1.5rem' }}>
                        My Raspberry Pi Zero 2 W Experiment
                    </h2>
                    <p>
                        I wanted to see whether this effect was actually responsible for the behavior I was seeing in practice.
                    </p>
                    <p>
                        I ran a 15-million-parameter local LLM on a <strong>Raspberry Pi Zero 2 W</strong>. The board uses a quad-core 1 GHz Arm Cortex-A53 CPU and 512 MB of LPDDR2 memory.
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: '1rem',
                        margin: '1.5rem 0'
                    }}>
                        <div style={{
                            padding: '1.2rem',
                            border: '1px solid var(--border-color)',
                            borderRadius: '6px',
                            background: 'var(--card-bg)',
                            textAlign: 'center'
                        }}>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>1 CPU Core</span>
                            <div style={{ fontSize: '1.8rem', fontWeight: 700, margin: '0.3rem 0', color: 'var(--text-color)' }}>~21.0 tok/s</div>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>FP32 Baseline</span>
                        </div>
                        <div style={{
                            padding: '1.2rem',
                            border: '1px solid var(--border-color)',
                            borderRadius: '6px',
                            background: 'var(--card-bg)',
                            textAlign: 'center'
                        }}>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>4 CPU Cores</span>
                            <div style={{ fontSize: '1.8rem', fontWeight: 700, margin: '0.3rem 0', color: 'var(--text-color)' }}>~24.5 tok/s</div>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>FP32 Multithreaded</span>
                        </div>
                    </div>

                    <p>
                        So going from one core to four cores increased performance by only about <strong>16.7%</strong>, despite giving the workload <strong>4× as many CPU cores</strong>.
                    </p>
                    <p>
                        The extra cores weren't useless—they helped slightly. But the scaling was extremely poor. That was my first clue that raw CPU compute wasn't the only thing limiting inference performance.
                    </p>

                    <hr style={{ border: 'none', borderTop: '1px dashed var(--border-color)', margin: '2rem 0' }} />

                    {/* Section: Simple Math */}
                    <h2 style={{ fontSize: '1.3rem', color: 'var(--text-color)', marginTop: '1.5rem' }}>
                        The Simple Math Behind the Bottleneck
                    </h2>
                    <p>
                        We can get a rough idea of the memory pressure with some simple arithmetic.
                    </p>

                    <h3 style={{ fontSize: '1.05rem', color: 'var(--text-color)', marginTop: '1.2rem' }}>
                        Step 1: Calculate the Model's Weight Size
                    </h3>
                    <p>
                        My model has approximately 15 million parameters. With FP32 weights, each parameter requires 4 bytes:
                    </p>

                    <div style={{
                        background: '#1e1e1e',
                        color: '#d4d4d4',
                        padding: '1rem',
                        borderRadius: '6px',
                        fontFamily: 'var(--code-font)',
                        fontSize: '0.9rem',
                        margin: '1rem 0'
                    }}>
                        15,000,000 × 4 bytes = 60,000,000 bytes ≈ <strong>60 MB</strong>
                    </div>
                    <p>
                        This is the amount of storage occupied by the model's weights alone.
                    </p>

                    <h3 style={{ fontSize: '1.05rem', color: 'var(--text-color)', marginTop: '1.2rem' }}>
                        Step 2: Estimate Weight Data Demand
                    </h3>
                    <p>
                        At approximately 24.5 tokens/second, we can estimate the amount of weight data that would need to be read if the model's weights are effectively streamed for each decoding step:
                    </p>

                    <div style={{
                        background: '#1e1e1e',
                        color: '#d4d4d4',
                        padding: '1rem',
                        borderRadius: '6px',
                        fontFamily: 'var(--code-font)',
                        fontSize: '0.9rem',
                        margin: '1rem 0'
                    }}>
                        60 MB × 24.5 tokens/sec ≈ 1,470 MB/sec ≈ <strong>1.47 GB/sec</strong>
                    </div>

                    <p>
                        This is not a measurement of actual DRAM traffic. Real systems have caches, intermediate tensors, memory latency, kernel overhead, and other effects. Instead, think of it as an <em>idealized weight-data demand</em>.
                    </p>
                    <p>
                        And that number gives us something very useful to compare against the hardware's actual memory capability.
                    </p>

                    <hr style={{ border: 'none', borderTop: '1px dashed var(--border-color)', margin: '2rem 0' }} />

                    {/* Section: Measuring Hardware */}
                    <h2 style={{ fontSize: '1.3rem', color: 'var(--text-color)', marginTop: '1.5rem' }}>
                        Measuring the Hardware
                    </h2>
                    <p>
                        To see what the Raspberry Pi's memory subsystem could actually deliver, I ran a <code>sysbench memory</code> benchmark:
                    </p>

                    <CodeBlock code={`sysbench memory --memory-oper=read run`} />

                    <figure style={{ margin: '1.5rem 0', textAlign: 'center' }}>
                        <img
                            src="/blog/sysbench_memory.png"
                            alt="sysbench memory read benchmark terminal output showing 1040.78 MiB/sec"
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                                borderRadius: '6px',
                                border: '1px solid var(--border-color)'
                            }}
                        />
                        <figcaption style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                            Hardware benchmark terminal output: Measured memory bandwidth of <strong>1040.78 MiB/sec (~1.04 GiB/sec)</strong>.
                        </figcaption>
                    </figure>

                    <p>Now compare the two numbers:</p>

                    <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
                        <table style={{
                            width: '100%',
                            borderCollapse: 'collapse',
                            fontSize: '0.9rem',
                            border: '1px solid var(--border-color)'
                        }}>
                            <thead>
                                <tr style={{ background: 'var(--card-bg)', borderBottom: '1px solid var(--border-color)' }}>
                                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Metric</th>
                                    <th style={{ padding: '0.75rem 1rem', textAlign: 'right' }}>Bandwidth / Speed</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                    <td style={{ padding: '0.75rem 1rem' }}>Estimated FP32 Weight-Data Demand</td>
                                    <td style={{ padding: '0.75rem 1rem', textAlign: 'right', fontWeight: 600 }}>~1.47 GB/s</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '0.75rem 1rem' }}>Measured LPDDR2 Memory Bandwidth</td>
                                    <td style={{ padding: '0.75rem 1rem', textAlign: 'right', fontWeight: 600 }}>~1.04 GiB/s</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p>
                        The numbers are not perfectly comparable because GB and GiB are slightly different units, and the calculation is an approximation. But the important observation is clear:
                    </p>
                    <p style={{ fontWeight: 600, color: 'var(--text-color)' }}>
                        The amount of data the model wants to move per second is in the same range as, and potentially above, what the memory subsystem can sustain.
                    </p>
                    <p>
                        That makes memory bandwidth a very plausible explanation for the poor CPU scaling. In other words, the four CPU cores aren't simply sitting around doing nothing—they're competing for the same limited memory bandwidth.
                    </p>

                    <hr style={{ border: 'none', borderTop: '1px dashed var(--border-color)', margin: '2rem 0' }} />

                    {/* Section: Why More CPU Cores Didn't Solve It */}
                    <h2 style={{ fontSize: '1.3rem', color: 'var(--text-color)', marginTop: '1.5rem' }}>
                        Why More CPU Cores Didn't Solve It
                    </h2>
                    <p>Imagine the system as a pipeline:</p>

                    {/* Modern Visual Memory Pipeline Diagram */}
                    <div style={{
                        margin: '2rem 0',
                        padding: '1.5rem',
                        background: 'var(--card-bg)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '8px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1rem'
                    }}>
                        <h4 style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-color)', fontWeight: 600 }}>
                            ⚡ Memory Subsystem Contention Diagram
                        </h4>

                        {/* CPU Cores Layer */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
                            gap: '0.6rem',
                            width: '100%',
                            maxWidth: '520px'
                        }}>
                            {['Core 1', 'Core 2', 'Core 3', 'Core 4'].map((core, i) => (
                                <div key={i} style={{
                                    padding: '0.6rem 0.4rem',
                                    textAlign: 'center',
                                    background: 'var(--bg-color)',
                                    border: '1px solid var(--border-color)',
                                    borderRadius: '4px',
                                    fontSize: '0.82rem',
                                    fontWeight: 600
                                }}>
                                    💻 CPU {core}
                                </div>
                            ))}
                        </div>

                        {/* Down Arrows */}
                        <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 600, textAlign: 'center' }}>
                            ↓ ↓ ↓ All 4 Cores Compete for Data ↓ ↓ ↓
                        </div>

                        {/* Memory Controller */}
                        <div style={{
                            padding: '0.8rem 1.5rem',
                            background: '#2d3748',
                            color: '#e2e8f0',
                            borderRadius: '6px',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            textAlign: 'center',
                            width: '100%',
                            maxWidth: '420px',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                        }}>
                            🧠 Shared Memory Controller (Funnel Bottleneck)
                        </div>

                        <div style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
                            ↓
                        </div>

                        {/* LPDDR2 RAM */}
                        <div style={{
                            padding: '0.8rem 1.5rem',
                            background: 'rgba(78, 201, 176, 0.1)',
                            color: '#4ec9b0',
                            border: '1px solid #4ec9b0',
                            borderRadius: '6px',
                            fontWeight: 700,
                            fontSize: '0.92rem',
                            textAlign: 'center',
                            width: '100%',
                            maxWidth: '420px'
                        }}>
                            💾 LPDDR2 RAM Subsystem (~1.04 GiB/sec Ceiling)
                        </div>
                    </div>

                    <p>
                        With one core, there is one worker consuming data. With four cores, there are four workers. But there is still only <strong>one shared memory subsystem</strong>.
                    </p>
                    <p>
                        If the memory subsystem is already close to its sustainable bandwidth limit, adding more workers doesn't magically create more bandwidth.
                    </p>
                    <p>
                        This is why we saw:
                    </p>
                    <ul>
                        <li><strong>1 core:</strong> ~21 tok/s</li>
                        <li><strong>4 cores:</strong> ~24.5 tok/s</li>
                    </ul>
                    <p>
                        The workload benefited slightly from additional CPU parallelism, but quickly encountered another ceiling.
                    </p>

                    <hr style={{ border: 'none', borderTop: '1px dashed var(--border-color)', margin: '2rem 0' }} />

                    {/* Section: The Solution: Shrink the Cargo */}
                    <h2 style={{ fontSize: '1.3rem', color: 'var(--text-color)', marginTop: '1.5rem' }}>
                        The Solution: Shrink the Cargo
                    </h2>
                    <p>
                        If you can't make the highway wider, make the cars smaller. This is exactly where <strong>quantization</strong> becomes so powerful for local inference.
                    </p>
                    <p>
                        I converted the model from FP32 to INT8. Instead of 4 bytes per parameter, each weight now requires approximately 1 byte.
                    </p>
                    <p>
                        The weight storage therefore drops from <strong>60 MB → 15 MB</strong> (a 4× reduction in weight size).
                    </p>

                    <p>Now let's repeat the same rough calculation at approximately 48 tokens/second:</p>

                    <div style={{
                        background: '#1e1e1e',
                        color: '#d4d4d4',
                        padding: '1rem',
                        borderRadius: '6px',
                        fontFamily: 'var(--code-font)',
                        fontSize: '0.9rem',
                        margin: '1rem 0'
                    }}>
                        15 MB × 48 tokens/sec = <strong>720 MB/sec</strong>
                    </div>

                    <p>
                        So the estimated weight-data demand has dropped to approximately <strong>720 MB/sec</strong>. Compared with the measured memory bandwidth of roughly 1.04 GiB/sec, this is much more comfortable.
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: '1rem',
                        margin: '1.5rem 0'
                    }}>
                        <div style={{
                            padding: '1.2rem',
                            border: '1px solid var(--border-color)',
                            borderRadius: '6px',
                            background: 'var(--card-bg)',
                            textAlign: 'center'
                        }}>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>FP32 (4-Core)</span>
                            <div style={{ fontSize: '1.8rem', fontWeight: 700, margin: '0.3rem 0', color: 'var(--text-color)' }}>~24.5 tok/s</div>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Demand: ~1.47 GB/s</span>
                        </div>
                        <div style={{
                            padding: '1.2rem',
                            border: '1px solid #4ec9b0',
                            borderRadius: '6px',
                            background: 'var(--card-bg)',
                            textAlign: 'center'
                        }}>
                            <span style={{ fontSize: '0.8rem', color: '#4ec9b0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>INT8 Quantized (4-Core)</span>
                            <div style={{ fontSize: '1.8rem', fontWeight: 700, margin: '0.3rem 0', color: '#4ec9b0' }}>~48.0 tok/s 🚀</div>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Demand: ~720 MB/s</span>
                        </div>
                    </div>

                    <p style={{ fontWeight: 600 }}>
                        That's almost a 2× increase in generation speed!
                    </p>
                    <p>
                        The improvement isn't perfectly predicted by the simple bandwidth calculation—and it shouldn't be. Real inference involves computation, cache effects, memory latency, quantization/dequantization overhead, and other factors.
                    </p>
                    <p>
                        But the experiment demonstrates the fundamental idea beautifully: <strong>When moving the model's weights is a bottleneck, making those weights smaller can be more effective than adding CPU cores.</strong>
                    </p>

                    <hr style={{ border: 'none', borderTop: '1px dashed var(--border-color)', margin: '2rem 0' }} />

                    {/* Section: Why Quantization Helps */}
                    <h2 style={{ fontSize: '1.3rem', color: 'var(--text-color)', marginTop: '1.5rem' }}>
                        Why Quantization Helps
                    </h2>
                    <p>
                        Quantization doesn't just reduce the amount of RAM required to store a model. It also reduces the amount of data that has to move through the memory hierarchy during inference. For a memory-bound workload, that's extremely valuable.
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                        gap: '1rem',
                        margin: '1.5rem 0'
                    }}>
                        <div style={{
                            padding: '1.2rem',
                            border: '1px solid var(--border-color)',
                            borderRadius: '6px',
                            background: 'var(--card-bg)'
                        }}>
                            <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem' }}>FP32 Precision</h4>
                            <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                                4 bytes / parameter<br />
                                15M parameters ≈ <strong>60 MB total</strong>
                            </p>
                        </div>
                        <div style={{
                            padding: '1.2rem',
                            border: '1px solid var(--border-color)',
                            borderRadius: '6px',
                            background: 'var(--card-bg)'
                        }}>
                            <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', color: '#4ec9b0' }}>INT8 Quantized</h4>
                            <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                                1 byte / parameter<br />
                                15M parameters ≈ <strong>15 MB total</strong>
                            </p>
                        </div>
                    </div>

                    <p>
                        The CPU now has dramatically less weight data to move around for each decoding step. This is one reason quantization is so important for local LLM inference—especially on hardware with limited memory bandwidth.
                    </p>

                    <hr style={{ border: 'none', borderTop: '1px dashed var(--border-color)', margin: '2rem 0' }} />

                    {/* Section: The Bigger Lesson */}
                    <h2 style={{ fontSize: '1.3rem', color: 'var(--text-color)', marginTop: '1.5rem' }}>
                        The Bigger Lesson: Don't Just Look at CPU Utilization
                    </h2>
                    <p>
                        When an LLM is running slowly, it's tempting to ask: <em>"How many CPU cores am I using?"</em>
                    </p>
                    <p style={{ fontWeight: 600 }}>
                        A better question is: <em>"What resource is actually limiting throughput?"</em>
                    </p>

                    <div style={{
                        background: 'var(--card-bg)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '6px',
                        padding: '1.2rem',
                        margin: '1.5rem 0'
                    }}>
                        <strong style={{ fontSize: '0.95rem', display: 'block', marginBottom: '0.6rem' }}>
                            🔍 Primary Bottlenecks in LLM Inference:
                        </strong>
                        <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                            <li style={{ marginBottom: '0.3rem' }}>CPU compute & CPU cores</li>
                            <li style={{ marginBottom: '0.3rem' }}><strong>Memory bandwidth</strong> (DRAM read speeds)</li>
                            <li style={{ marginBottom: '0.3rem' }}>Memory latency</li>
                            <li style={{ marginBottom: '0.3rem' }}>Cache size & behavior (L1/L2/L3)</li>
                            <li style={{ marginBottom: '0.3rem' }}>SIMD / Vectorization support (NEON, AVX-512)</li>
                            <li style={{ marginBottom: '0.3rem' }}>Storage I/O (flash reading vs RAM)</li>
                            <li style={{ marginBottom: '0.3rem' }}>GPU compute & GPU memory bandwidth (VRAM)</li>
                        </ul>
                    </div>

                    <p>
                        For autoregressive decoding, particularly with relatively small batch sizes, memory movement can become a major constraint. That's why simply throwing more CPU cores at the problem doesn't always produce proportional gains.
                    </p>

                    <hr style={{ border: 'none', borderTop: '1px dashed var(--border-color)', margin: '2rem 0' }} />

                    {/* Section: Roofline Perspective */}
                    <h2 style={{ fontSize: '1.3rem', color: 'var(--text-color)', marginTop: '1.5rem' }}>
                        The Roofline Perspective
                    </h2>
                    <p>
                        This behavior can also be understood using the <strong>Roofline Model</strong>. The Roofline Model describes performance as being constrained by either:
                    </p>
                    <ol>
                        <li><strong>Compute throughput</strong>, or</li>
                        <li><strong>Memory bandwidth</strong></li>
                    </ol>
                    <p>
                        If an application's arithmetic intensity (FLOPs per byte moved) is low enough, its performance is limited by how quickly data can be moved rather than how quickly the processor can perform arithmetic.
                    </p>
                    <p>
                        That's essentially what we're seeing here. The CPU has more compute resources available when moving from one core to four, but the workload runs into the memory-bandwidth ceiling. Reducing the size of the weights through quantization moves that workload into a more favorable region.
                    </p>

                    <hr style={{ border: 'none', borderTop: '1px dashed var(--border-color)', margin: '2rem 0' }} />

                    {/* Section: My Takeaway */}
                    <h2 style={{ fontSize: '1.3rem', color: 'var(--text-color)', marginTop: '1.5rem' }}>
                        My Takeaway
                    </h2>
                    <p>
                        This tiny Raspberry Pi experiment changed how I think about local LLM performance.
                    </p>
                    <p>
                        I started with a simple assumption: <strong>More CPU cores → more tokens per second.</strong>
                    </p>
                    <p>
                        But the results told a different story:
                    </p>
                    <ul>
                        <li><strong>1 core:</strong> ~21 tok/s</li>
                        <li><strong>4 cores:</strong> ~24.5 tok/s</li>
                    </ul>
                    <p>
                        Then I changed something that had nothing to do with the number of CPU cores: <strong>FP32 → INT8</strong>.
                    </p>
                    <p style={{ fontWeight: 600, fontSize: '1.05rem', color: '#4ec9b0' }}>
                        And suddenly: ~24.5 tok/s → ~48 tok/s 🚀
                    </p>
                    <p>
                        Before spending time writing increasingly complex multi-threaded code, or buying a machine with more CPU cores, identify the actual bottleneck. Do the math. Measure the hardware. Find your ceiling.
                    </p>
                    <p style={{ fontWeight: 600 }}>
                        And remember: In local LLM inference, the fastest processor isn't always the one with the most cores. Sometimes, the biggest performance win comes from simply moving less data.
                    </p>
                </div>
            </article>

            {/* Bottom Series Link Banner & Navigation */}
            <div style={{
                marginTop: '2rem',
                padding: '1.2rem',
                borderRadius: '8px',
                background: 'var(--card-bg)',
                border: '1px solid var(--border-color)',
                textAlign: 'center'
            }}>
                <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem' }}>🔗 Enjoyed this deep dive?</h4>
                <p style={{ margin: '0 0 1rem 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    Check out Part 1 to see the complete setup guide, C compilation flags, and benchmark walkthrough on the Raspberry Pi Zero 2 W!
                </p>
                <Link
                    to="/blog/llm-raspberry-pi-zero-2w"
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
                    Read Part 1: Running a Local LLM on a Raspberry Pi Zero 2 W &rarr;
                </Link>
            </div>

            {/* Bottom Navigation */}
            <div style={{ marginTop: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
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

export default BlogPostMemoryWall;
