import React from 'react';
import sariaImage3 from '../assets/saria-image-3.webp';

const SchoolProjects = () => {
    const projects = [
        {
            title: "Meet Sarai",
            image: sariaImage3
        },
        {
            title: "Juneteenth Events in Philly 2024",
            image: sariaImage3
        },
        {
            title: "Freedom Day: June Teenth",
            image: sariaImage3
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
                    School Projects & Writing
                </h1>
                <p style={{
                    fontSize: '28px',
                    fontWeight: '500',
                    color: '#333'
                }}>
                    Highlighted Work:
                </p>
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
                            aspectRatio: '3/4',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                            cursor: 'pointer',
                            transition: 'transform 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <img 
                            src={project.image} 
                            alt={project.title}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
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
                            transition: 'height 0.3s ease'
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
                    #school-projects div[style*="grid-template-columns: repeat(3, 1fr)"] {
                        grid-template-columns: 1fr !important;
                        gap: 20px !important;
                    }
                    #school-projects p[style*="opacity: 0.8"] {
                        text-align: center !important;
                        margin-bottom: 40px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default SchoolProjects;
