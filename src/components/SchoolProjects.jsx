import React, { useState } from 'react';
import hairDayThumbnail from '../assets/hair-day-thumbnail.png';
import orientationThumbnail from '../assets/sarai-new.webp';
import sxswThumbnail from '../assets/saria-image-1.webp';

const SchoolProjects = () => {
    const [playingIndices, setPlayingIndices] = useState(new Set());

    const togglePlay = (index) => {
        const newPlaying = new Set(playingIndices);
        newPlaying.add(index);
        setPlayingIndices(newPlaying);
    };

    const projects = [
        {
            title: "Hair day",
            video: "https://drive.google.com/file/d/1Wj-IUqX2DmSpsKvoiljpRlTLYe1Kve5p/preview",
            thumbnail: hairDayThumbnail
        },
        {
            title: "2024 Orientation",
            video: "https://drive.google.com/file/d/1b4pASTv-yUaAnCY4nVn66pWKX84vWXfY/preview",
            thumbnail: orientationThumbnail
        },
        {
            title: "SXSW 2025",
            video: "https://drive.google.com/file/d/1JoUn9-Uf4ONNfWNBjgbMS_RxOkcBT1AT/preview",
            thumbnail: sxswThumbnail
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
                        onClick={() => !playingIndices.has(index) && togglePlay(index)}
                    >
                        {playingIndices.has(index) || !project.thumbnail ? (
                            /* Wrapper to hide Google Drive UI (pop-out button) */
                            <div style={{
                                position: 'absolute',
                                top: '-50px', // Offset to hide top bar
                                left: '-10px',
                                right: '-10px',
                                bottom: '-50px',
                            }}>
                                <iframe 
                                    src={project.video} 
                                    style={{
                                        width: '100%',
                                        height: 'calc(100% + 100px)', // Compensate for top/bottom offset
                                        border: 'none',
                                    }}
                                    allow="autoplay"
                                ></iframe>
                            </div>
                        ) : (
                            /* Thumbnail Overlay */
                            <div style={{
                                width: '100%',
                                height: '100%',
                                backgroundImage: `url(${project.thumbnail})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'relative'
                            }}>
                                {/* Play Button Overlay */}
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                    backdropFilter: 'blur(8px)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    border: '1.5px solid rgba(255, 255, 255, 0.8)',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                                }} className="play-button-overlay">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                        )}
                        
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
                            pointerEvents: 'none',
                            zIndex: 10
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
