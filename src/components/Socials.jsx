import video1 from '../assets/sarai-video-1.mp4';
import video2 from '../assets/sarai-video-2.mp4';
import video3 from '../assets/sarai-video-3.mp4';
import thumb1 from '../assets/cmi-thumbnail.jpg';
import thumb2 from '../assets/interning-thumbnail.png';
import thumb3 from '../assets/hair-day-thumbnail.png';
import thumb4 from '../assets/sarai-new.webp';

const Socials = () => {
    const reels = [
        { id: 1, views: '2,333', thumbnail: thumb1, video: video1 },
        { id: 2, views: '1,115', thumbnail: thumb2, video: video2 },
        { id: 3, views: '4,521', thumbnail: thumb3, video: video3 },
        { id: 4, views: '3,210', thumbnail: thumb4, video: video1 }, // Duplicating for grid balance
    ];

    const instagramUrl = "https://www.instagram.com/simply.x.sarai/reels/";
    const linkedinUrl = "https://www.linkedin.com/in/sarai-nam-382a33208/recent-activity/all/";

    return (
        <section id="socials" style={{
            padding: '100px 10% 0',
            backgroundColor: '#fffafb',
            fontFamily: "'Funnel Display', sans-serif"
        }}>
            <h1 style={{
                fontSize: '48px',
                fontWeight: '700',
                textAlign: 'center',
                color: '#1a1a1a',
                marginBottom: '60px'
            }}>
                What's happening on socials
            </h1>

            <div style={{
                width: '100%',
                maxWidth: '1200px',
                margin: '0 auto',
            }}>
                <div className="socials-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '15px',
                    width: '100%'
                }}>
                    {reels.map((reel) => (
                        <a 
                            key={reel.id} 
                            href={instagramUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{
                                position: 'relative',
                                aspectRatio: '9/16',
                                overflow: 'hidden',
                                display: 'block',
                                borderRadius: '15px',
                                backgroundColor: '#f0f0f0',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                transition: 'transform 0.3s ease'
                            }}
                            className="reel-item"
                        >
                            <img 
                                src={reel.thumbnail} 
                                alt={`Reel ${reel.id}`}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'filter 0.3s ease'
                                }}
                            />
                            {/* Play Icon Overlay */}
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '40px',
                                height: '40px',
                                backgroundColor: 'rgba(255,255,255,0.3)',
                                backdropFilter: 'blur(4px)',
                                borderRadius: '50%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                border: '1px solid white'
                            }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                            <div style={{
                                position: 'absolute',
                                bottom: '15px',
                                left: '15px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                color: 'white',
                                fontSize: '12px',
                                fontWeight: '600',
                                textShadow: '0 1px 4px rgba(0,0,0,0.5)'
                            }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                                </svg>
                                {reel.views}
                            </div>
                        </a>
                    ))}
                </div>

                <div style={{
                    marginTop: '40px',
                    textAlign: 'center'
                }}>
                    <a 
                        href={instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            backgroundColor: '#cc4d87',
                            color: 'white',
                            padding: '12px 30px',
                            borderRadius: '30px',
                            textDecoration: 'none',
                            fontWeight: '600',
                            fontSize: '16px',
                            transition: 'background 0.3s ease',
                            boxShadow: '0 4px 15px rgba(204, 77, 135, 0.3)'
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#b03d72'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#cc4d87'}
                    >
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        Follow @simply.x.sarai
                    </a>
                </div>
            </div>

            {/* Footer */}
            <footer style={{
                textAlign: 'center',
                padding: '60px 0',
                borderTop: '1px solid #efefef',
                marginTop: '100px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px'
            }}>
                <div style={{ fontSize: '24px', fontWeight: '700', color: '#333' }}>SN</div>
                <div style={{ color: '#666', fontSize: '14px' }}>
                    saraihnam@gmail.com<br />
                    +233 456 789 123
                </div>
                <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
                    <a href={instagramUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#cc4d87' }}>
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </a>
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#0a66c2' }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                    </a>
                </div>
                <div style={{ color: '#aaa', fontSize: '12px', marginTop: '20px' }}>
                    © 2026 Sarai Nam. All rights reserved.
                </div>
            </footer>

            <style>{`
                @media (max-width: 1024px) {
                    #socials {
                        padding: 60px 5% 0 !important;
                    }
                    #socials h1 {
                        font-size: 32px !important;
                        margin-bottom: 40px !important;
                    }
                    .socials-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }
                .reel-item:hover {
                    transform: scale(1.02);
                }
                .reel-item:hover img {
                    filter: brightness(0.8);
                }
            `}</style>
        </section>
    );
};

export default Socials;
