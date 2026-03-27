import React from 'react';

const SchoolProjects = () => {
    const projects = [
        {
            title: "Hair day",
            video: "https://drive.google.com/file/d/1Wj-IUqX2DmSpsKvoiljpRlTLYe1Kve5p/preview"
        },
        {
            title: "2024 Orientation",
            video: "https://drive.google.com/file/d/1b4pASTv-yUaAnCY4nVn66pWKX84vWXfY/preview"
        },
        {
            title: "SXSW 2025",
            video: "https://drive.google.com/file/d/1JoUn9-Uf4ONNfWNBjgbMS_RxOkcBT1AT/preview"
        }
    ];

    return (
        <section id="school-projects" style={{
            padding: '100px 10%',
            backgroundColor: '#fffafb', // Very light pink/off-white
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontFamily: "'Funnel Display', sans-serif"
        }}>
            <div style={{
                textAlign: 'center',
                marginBottom: '60px'
            }}>
                <h1 style={{
                    fontSize: '48px',
                    fontWeight: '700',
                    color: '#1a1a1a',
                    marginBottom: '10px'
                }}>
                    Highlights and Moments
                </h1>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '30px',
                width: '100%',
                maxWidth: '1200px'
            }}>
                {projects.map((project, index) => (
                    <div 
                        key={index}
                        style={{
                            position: 'relative',
                            borderRadius: '24px',
                            overflow: 'hidden',
                            aspectRatio: '9/16',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                            cursor: 'pointer',
                            transition: 'transform 0.3s ease',
                            backgroundColor: '#000'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        {/* Wrapper to hide Google Drive UI (pop-out button) */}
                        <div style={{
                            position: 'absolute',
                            top: '-50px', // Offset to hide top bar
                            left: '-10px',
                            right: '-10px',
                            bottom: '-50px',
                            pointerEvents: 'none' // Allow title click
                        }}>
                            <iframe 
                                src={project.video} 
                                style={{
                                    width: '100%',
                                    height: 'calc(100% + 100px)', // Compensate for top/bottom offset
                                    border: 'none',
                                    pointerEvents: 'auto'
                                }}
                                allow="autoplay"
                            ></iframe>
                        </div>
                        
                        {/* Gradient Overlay */}
                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '40%',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                            display: 'flex',
                            alignItems: 'flex-end',
                            padding: '30px',
                            transition: 'height 0.3s ease',
                            pointerEvents: 'none'
                        }}>
                            <h3 style={{
                                color: 'white',
                                fontSize: '22px',
                                fontWeight: '600',
                                lineHeight: '1.3',
                                margin: 0
                            }}>
                                {project.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
            <style>{`
                @media (max-width: 1024px) {
                    #school-projects {
                        padding: 80px 8% !important;
                    }
                    #school-projects h1 {
                        font-size: 32px !important;
                        text-align: center;
                    }
                    #school-projects div[style*="grid-template-columns"] {
                        grid-template-columns: 1fr !important;
                        gap: 20px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default SchoolProjects;
