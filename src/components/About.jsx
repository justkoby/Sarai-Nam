import React from 'react';
import saraiNew from '../assets/sarai-new.webp';
import resumePdf from '../assets/Sarai Nam-Resume.pdf';

const About = () => {
    return (
        <section id="about" style={{
            padding: '120px 10%',
            backgroundColor: 'white',
            display: 'flex',
            alignItems: 'center',
            gap: '80px',
            minHeight: '80vh',
            fontFamily: "'Funnel Display', sans-serif"
        }}>
            <div style={{ flex: 1.2 }}>
                <h1 style={{
                    fontSize: '48px',
                    lineHeight: '1.1',
                    fontWeight: '700',
                    marginBottom: '40px',
                    color: '#1a1a1a'
                }}>
                    Hi, I'm <span style={{ color: '#cc4d87' }}>Sarai</span>.
                </h1>
                
                <p style={{
                    fontSize: '18px',
                    lineHeight: '1.7',
                    color: '#444',
                    marginBottom: '20px'
                }}>
                    I am a PR and communications enthusiast with a strong passion for storytelling and creative expression. Whether through writing, digital strategy, or visual content, I am dedicated to crafting narratives that resonate, inform, and connect with audiences.
                </p>
                <p style={{
                    fontSize: '18px',
                    lineHeight: '1.7',
                    color: '#444',
                    marginBottom: '20px'
                }}>
                    I am particularly driven by public health initiatives and believe in the power of media and communication to educate communities and advance health awareness.
                </p>

                <a 
                    href={resumePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        cursor: 'pointer',
                        marginTop: '20px',
                        transition: 'all 0.3s ease',
                        textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.gap = '16px';
                        const circle = e.currentTarget.querySelector('.circle');
                        const icon = e.currentTarget.querySelector('svg');
                        if (circle) circle.style.backgroundColor = '#cc4d87';
                        if (icon) icon.style.fill = 'white';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.gap = '12px';
                        const circle = e.currentTarget.querySelector('.circle');
                        const icon = e.currentTarget.querySelector('svg');
                        if (circle) circle.style.backgroundColor = 'transparent';
                        if (icon) icon.style.fill = '#cc4d87';
                    }}
                >
                    <span style={{ 
                        fontSize: '18px', 
                        fontWeight: '600', 
                        color: '#cc4d87' 
                    }}>More about me</span>
                    <div className="circle" style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        border: '2px solid #cc4d87',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease'
                    }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#cc4d87" style={{ transition: 'all 0.3s ease' }}>
                            <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" />
                        </svg>
                    </div>
                </a>
            </div>

            {/* Right Image */}
            <div style={{
                flex: 0.8,
                display: 'flex',
                justifyContent: 'center'
            }}>
                <div style={{
                    position: 'relative',
                    padding: '12px',
                    backgroundColor: '#fff',
                    borderRadius: '15px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    transform: 'rotate(4deg)', // Tilted image
                    maxWidth: '400px'
                }}>
                    <img 
                        src={saraiNew} 
                        alt="Sarai" 
                        style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '8px',
                            display: 'block'
                        }} 
                    />
                </div>
            </div>

            <style>{`
                @media (max-width: 1024px) {
                    #about {
                        padding: 60px 10% !important;
                        flex-direction: column !important; /* Text top, image bottom */
                        text-align: left;
                        gap: 40px !important;
                    }
                    #about h1 {
                        font-size: 40px !important;
                        margin-bottom: 30px !important;
                    }
                    #about div[style*="flex: 1.2"] {
                        min-width: 100% !important;
                    }
                    #about div[style*="flex: 0.8"] {
                        min-width: 100% !important;
                        justify-content: flex-start !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default About;
