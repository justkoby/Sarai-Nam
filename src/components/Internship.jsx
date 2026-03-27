import React, { useRef, useState } from 'react';

const Internship = () => {
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);

    const togglePlay = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <section id="internship" style={{
            padding: '100px 10%',
            backgroundColor: '#D98BA8', // Signature pink background
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '80vh',
            fontFamily: "'Funnel Display', sans-serif"
        }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'min-content 1fr 1.2fr',
                gap: '40px',
                alignItems: 'center',
                width: '100%',
                maxWidth: '1200px'
            }}>
                {/* Left Navigation Buttons */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px'
                }}>
                    <button style={{
                        width: '45px',
                        height: '45px',
                        backgroundColor: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                    }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#333">
                            <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
                        </svg>
                    </button>
                    <button style={{
                        width: '45px',
                        height: '45px',
                        backgroundColor: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                    }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#333">
                            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
                        </svg>
                    </button>
                </div>

                {/* Media Container */}
                <div style={{
                    position: 'relative',
                    width: '380px',
                    borderRadius: '30px',
                    border: '8px solid white',
                    overflow: 'hidden',
                    boxShadow: '0 25px 50px rgba(0,0,0,0.2)',
                    aspectRatio: '9/16',
                    backgroundColor: '#000'
                }}>
                    <iframe
                        src="https://drive.google.com/file/d/1exMaunchPuA_WyiHSM8uAd2--YFVgXft/preview"
                        style={{
                            width: '100%',
                            height: '100%',
                            border: 'none'
                        }}
                        allow="autoplay"
                    ></iframe>
                </div>

                {/* Text Content */}
                <div style={{
                    color: 'white',
                    maxWidth: '600px'
                }}>
                    <h2 style={{
                        fontSize: '56px',
                        lineHeight: '1',
                        fontWeight: '700',
                        marginBottom: '30px'
                    }}>
                        Interning at<br />CMI Media Group
                    </h2>

                    <div style={{
                        fontSize: '17px',
                        lineHeight: '1.6',
                        opacity: '0.95'
                    }}>
                        <p style={{ marginBottom: '20px' }}>
                            I had the opportunity to intern in Public Relations, where I contributed to communicating emerging ideas in healthcare marketing to a broader audience.
                        </p>
                        <p style={{ marginBottom: '20px' }}>
                            In this role, I worked on developing content that made healthcare topics and concepts more accessible, engaging, and relevant—particularly for patients and professionals exploring the space.
                        </p>
                        <p style={{ marginBottom: '20px' }}>
                            I created written content and updates that highlighted resources such as CMI Media Group, helping audiences better understand how to leverage media for healthcare communication and innovation.
                        </p>

                        <p style={{ marginBottom: '10px', fontWeight: '600' }}>Through this experience, I:</p>
                        <ul style={{
                            paddingLeft: '20px',
                            listStyleType: 'disc',
                            marginBottom: '20px'
                        }}>
                            <li style={{ marginBottom: '8px' }}>Strengthened my ability to simplify complex topics into clear, engaging communication</li>
                            <li style={{ marginBottom: '8px' }}>Developed content tailored for diverse audiences with varying levels of AI familiarity</li>
                            <li style={{ marginBottom: '20px' }}>Gained hands-on experience in digital communication within a fast-evolving tech space</li>
                        </ul>

                        <p>
                            This role deepened my interest in the intersection of media, technology, and education, and reinforced my belief in the power of communication to make innovation more accessible and impactful.
                        </p>
                    </div>
                </div>
            </div>
            <style>{`
                @media (max-width: 1024px) {
                    #internship {
                        padding: 80px 8% !important;
                    }
                    #internship > div {
                        grid-template-columns: 1fr !important;
                        gap: 30px !important;
                    }
                    #internship h2 {
                        font-size: 36px !important;
                        text-align: center;
                    }
                    #internship div[style*="width: 380px"] {
                        width: 100% !important;
                        max-width: 320px !important;
                        margin: 0 auto !important;
                    }
                    #internship div[style*="display: flex; flex-direction: column; gap: 15px"] {
                        flex-direction: row !important;
                        justify-content: center !important;
                        order: 3 !important;
                    }
                    #internship div[style*="color: white"] {
                        order: 1 !important;
                    }
                    #internship div[style*="position: relative"] {
                        order: 2 !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Internship;
