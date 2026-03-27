import React, { useState, useRef } from 'react';
import saraiVideo1 from '../assets/sarai-video-1.mp4';
import saraiVideo2 from '../assets/sarai-video-2.mp4';
import saraiVideo3 from '../assets/sarai-video-3.mp4';

const Projects = () => {
    const tabs = ['CMI MEDIA GROUP', 'WIN WIN COFFEE', 'THE WORLD WITHIN US'];
    const [activeTab, setActiveTab] = useState('CMI MEDIA GROUP');
    const [isMuted, setIsMuted] = useState(true);
    const videoRefs = useRef([]);
    const scrollContainerRef = useRef(null);

    const togglePlay = (index) => {
        const video = videoRefs.current[index];
        if (video) {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        }
    };

    const toggleMute = () => {
        videoRefs.current.forEach(video => {
            if (video) video.muted = !isMuted;
        });
        setIsMuted(!isMuted);
    };

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const scrollAmount = container.offsetHeight;
            container.scrollBy({
                top: direction === 'down' ? scrollAmount : -scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const projectData = {
        'CMI MEDIA GROUP': {
            description: `I had the opportunity to work with CMI Media Group, where I contributed to content creation and brand storytelling within the healthcare marketing space.\n\nDuring this experience, I supported the development of social media content and campaign messaging, helping translate complex healthcare topics into engaging and accessible communication.\n\nThis role strengthened my ability to:\n• Adapt tone for professional and public audiences\n• Create content aligned with brand voice and strategy\n• Collaborate within a fast-paced, client-focused environment\n\nIt also gave me valuable insight into how media and communication can influence awareness and engagement in the healthcare industry.`,
            videos: [saraiVideo1]
        },
        'WIN WIN COFFEE': {
            description: `I had the chance to work on content for Win Win Coffee, focusing on social media storytelling and product promotion.\n\nI developed engaging captions and campaign content designed to connect with audiences while maintaining a fun, relatable brand voice.\n\nThrough this project, I:\n\n• Created lifestyle-driven content to promote product launches\n• Used humor and cultural references to boost engagement\n• Strengthened my ability to write for social media audiences\n\nThis experience helped me better understand how creative content can drive brand visibility and audience interaction.`,
            videos: [saraiVideo2, saraiVideo3]
        },
        'THE WORLD WITHIN US': {
            description: `“The World Within Us” is a creative storytelling project centered on capturing perspective, curiosity, and everyday moments through visual and narrative content.\n\nThis project allowed me to explore a more expressive side of storytelling, focusing on emotion, simplicity, and meaning.\n\nThrough this work, I:\n\n• Experimented with visual storytelling and mood-driven content\n• Developed narratives that encourage reflection and curiosity\n• Focused on creating content that resonates on a personal level\n\nIt reflects my ability to blend creativity with intention, using storytelling as a tool to connect with audiences in a more human and relatable way.`,
            videos: [saraiVideo1]
        }
    };

    return (
        <section id="projects" style={{
            padding: '160px 10% 100px', // More top padding for sticky navbar
            backgroundColor: '#fffafb',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '800px',
            fontFamily: "'Funnel Display', sans-serif"
        }}>
            <h1 style={{
                fontSize: '48px',
                fontWeight: '700',
                marginBottom: '40px',
                color: '#333'
            }}>
                <span style={{ color: '#cc4d87' }}>Projects</span> I've Worked On.
            </h1>

            {/* Tabs */}
            <div style={{
                display: 'flex',
                backgroundColor: 'white',
                padding: '5px',
                borderRadius: '50px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                marginBottom: '60px'
            }}>
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        style={{
                            padding: '12px 30px',
                            border: 'none',
                            borderRadius: '25px',
                            backgroundColor: activeTab === tab ? '#cc4d87' : 'transparent',
                            color: activeTab === tab ? 'white' : '#666',
                            fontWeight: '600',
                            fontSize: '14px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            letterSpacing: '0.05em'
                        }}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Content Body */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '80px',
                alignItems: 'start',
                width: '100%',
                maxWidth: '1200px'
            }}>
                {/* Left Description */}
                <div style={{
                    fontSize: '18px',
                    lineHeight: '1.7',
                    color: '#444',
                    whiteSpace: 'pre-line'
                }}>
                    {projectData[activeTab].description}
                </div>

                {/* Right Video Mockup */}
                <div style={{ 
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px'
                }}>
                    <div 
                        ref={scrollContainerRef}
                        style={{
                            width: '100%',
                            borderRadius: '24px',
                            overflowY: 'auto',
                            overflowX: 'hidden',
                            backgroundColor: '#000',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                            aspectRatio: '9/16',
                            position: 'relative',
                            maxHeight: '70vh',
                            scrollSnapType: 'y mandatory',
                            msOverflowStyle: 'none',  /* IE and Edge */
                            scrollbarWidth: 'none'  /* Firefox */
                        }}
                    >
                        {/* Hide scrollbar for Chrome, Safari and Opera */}
                        {projectData[activeTab].videos.map((videoSrc, index) => (
                            <div key={index} style={{
                                minWidth: '100%',
                                minHeight: '100%',
                                height: '100%',
                                position: 'relative',
                                scrollSnapAlign: 'start'
                            }}>
                                <video
                                    ref={el => videoRefs.current[index] = el}
                                    src={videoSrc}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                    loop
                                    muted={isMuted}
                                    playsInline
                                    onClick={() => togglePlay(index)}
                                />

                                {/* Custom Controls Overlay */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: '30px',
                                    right: '30px',
                                    zIndex: 10
                                }}>
                                    {/* Mute/Unmute Indicator */}
                                    <div 
                                        onClick={(e) => { e.stopPropagation(); toggleMute(); }}
                                        style={{
                                            cursor: 'pointer',
                                            backgroundColor: 'rgba(0,0,0,0.4)',
                                            padding: '8px',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        {isMuted ? (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                                            </svg>
                                        ) : (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                                            </svg>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Vertical Scroll Buttons on the Right */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '15px'
                    }}>
                        <button 
                            onClick={() => scroll('up')}
                            style={{
                                width: '40px',
                                height: '40px',
                                backgroundColor: 'white',
                                border: '1px solid #eee',
                                borderRadius: '50%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                cursor: 'pointer',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                            }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="#cc4d87">
                                <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
                            </svg>
                        </button>
                        <button 
                            onClick={() => scroll('down')}
                            style={{
                                width: '40px',
                                height: '40px',
                                backgroundColor: '#cc4d87',
                                border: 'none',
                                borderRadius: '50%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                cursor: 'pointer',
                                boxShadow: '0 4px 12px rgba(204,77,135,0.3)'
                            }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <style>{`
                div::-webkit-scrollbar {
                    display: none;
                }
                @media (max-width: 1024px) {
                    #projects {
                        padding: 100px 8% 60px !important;
                        text-align: left;
                    }
                    #projects h1 {
                        font-size: 36px !important;
                        text-align: center;
                    }
                    #projects div[style*="display: flex; background-color: white"] {
                        flex-wrap: wrap !important;
                        justify-content: center !important;
                        gap: 10px !important;
                        border-radius: 20px !important;
                        margin-bottom: 40px !important;
                    }
                    #projects button {
                        padding: 8px 16px !important;
                        font-size: 12px !important;
                    }
                    #projects div[style*="display: grid"] {
                        grid-template-columns: 1fr !important;
                        gap: 40px !important;
                    }
                    #projects div[style*="display: flex; align-items: center; gap: 20px"] {
                        flex-direction: column !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Projects;
