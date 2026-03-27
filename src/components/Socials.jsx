import React from 'react';

const Socials = () => {
    const reels = [
        { id: 1, views: '2,333', url: 'https://instagram.facc5-2.fna.fbcdn.net/v/t51.75761-15/501690233_18068566492949708_1719108895273864135_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=111&ig_cache_key=MzY0Mjc3NzYzMjE5OTgyODg0NzE4MDY4NTY2NDg2OTQ5NzA4.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExMDh4MTk2Ni5zZHIuQzMifQ%3D%3D&_nc_ohc=GIkWnWh1UKgQ7kNvwEYBlxP&_nc_oc=AdrhaUd5wNvp_sqA3Q_5sy7Zx44hKU6gg4lMwzCfW1_DnMVGl0D0DFRKdITax4APpQU&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.facc5-2.fna&_nc_gid=5arnELQZMJnJqSkd3K1nug&_nc_ss=7a32e&oh=00_AfzqSF6BgeHzchvZ32P0CxkeUZixLgnCkrIvC035ccPLLA&oe=69C79794' },
        { id: 2, views: '1,115', url: 'https://instagram.facc5-2.fna.fbcdn.net/v/t51.75761-15/501656754_18068516944949708_1159482792745565706_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=111&ig_cache_key=MzU2NjQxNjg1MTA0MTA5NTkxMTE4MDY4NTE2OTM4OTQ5NzA4.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExMzZ4MjAxNC5zZHIuQzMifQ%3D%3D&_nc_ohc=922j36yHdB4Q7kNvwFU8B8l&_nc_oc=AdruACwtIYEUqC1brELoalZmXpaKmLqH94FrvThXpeTiN3PkwnJFMhc0Yzmai80V-Mo&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.facc5-2.fna&_nc_gid=5arnELQZMJnJqSkd3K1nug&_nc_ss=7a32e&oh=00_AfwJ7mcHUTZMZlv8HIYmRvMc_ltDaAP470eAjEZZTIu-0w&oe=69C78BE7' },
        { id: 3, views: '2,581', url: 'https://instagram.facc5-2.fna.fbcdn.net/v/t51.75761-15/501648337_18068741440949708_4080960334336787463_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=109&ig_cache_key=MzUzNTk4ODm9MDk1Nzk4OTc0MDE4MDY4NzQxNDM0OTQ5NzA4.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjU4NngxMDM2LnNkci5DMyJ9&_nc_ohc=gf7DUOUBnfAQ7kNvwFrpwK5&_nc_oc=AdpIlu3B3IVM_A1hHESf5BM6d0_rXIN3vQ60NpFZkj84NzybfxY2TpP81kv9cfe83GM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.facc5-2.fna&_nc_gid=5arnELQZMJnJqSkd3K1nug&_nc_ss=7a32e&oh=00_Afxv1a2XQF9qMUFl0xQY5b-i4RPrrhXcvqNcL9YFiLYLCg&oe=69C795BA' },
        { id: 4, views: '1,506', url: 'https://instagram.facc5-2.fna.fbcdn.net/v/t51.75761-15/470307510_18053205547949708_1561237998820874555_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=104&ig_cache_key=MzUyMzc0MzA5MzY3NTY2MDcyMw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjIyNjh4NDAzMi5zZHIuQzMifQ%3D%3D&_nc_ohc=CgaD1YzYSq8Q7kNvwHJqBj8&_nc_oc=Ado_s5zYK8nx5pOEBLjL3QZ5zj5cxIfx7Pb6Q_dMLAiRuvZ_p4qUmxFgqT0-qjcDFzQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.facc5-2.fna&_nc_gid=5arnELQZMJnJqSkd3K1nug&_nc_ss=7a32e&oh=00_AfwpfdP84qrwzKrYKSbq44ymgJJxg3HHi8Rc2lyByQ0txA&oe=69C788C8' },
        { id: 5, views: '3,016', url: 'https://instagram.facc5-2.fna.fbcdn.net/v/t51.75761-15/466944743_18050111896949708_6769198291644617760_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=108&ig_cache_key=MzUwMDQ1NDcwNTE1Nzc2MjY4MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjIyNjh4NDAzMi5zZHIuQzMifQ%3D%3D&_nc_ohc=py8fA0iMtDAQ7kNvwFYiUZn&_nc_oc=Adr9Qjsw_CUpnvZKgumDjE7_nSV3IQ-bN4oegEyop8P_R0ztOuaweUiau5mESwLmdCc&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.facc5-2.fna&_nc_gid=5arnELQZMJnJqSkd3K1nug&_nc_ss=7a32e&oh=00_AfzvR45Zr6v9DbQ3jHLw9zbxX3D_4A-RUyDM7twvnCoG-Q&oe=69C78BBF' },
        { id: 6, views: '750', url: 'https://instagram.facc5-2.fna.fbcdn.net/v/t51.75761-15/466422447_18049933261949708_317782363405209185_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=108&ig_cache_key=MzQ5OTA0NjIyMTY1MjYzODAxNw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEyNjh4MjI1Mi5zZHIuQzMifQ%3D%3D&_nc_ohc=AacdpMTL-EIQ7kNvwHWWKAS&_nc_oc=Ado-9vy54r1t5OzNUfg6BvF9Qh2PDUnZsZj4Sn4jEJD4jLsa_4FlX7eElbwt1kklY14&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.facc5-2.fna&_nc_gid=5arnELQZMJnJqSkd3K1nug&_nc_ss=7a32e&oh=00_Afw-ayI32tU1o2BRRpB8kkWgGcczigsr1yd6YCGBCsfW5A&oe=69C77CED' },
        { id: 7, views: '1,444', url: 'https://instagram.facc5-2.fna.fbcdn.net/v/t51.71878-15/503584016_1155824656587745_6681680346286539412_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=104&ig_cache_key=MzQ1NzAyMzg2NDE4ODQ4NjQ1NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjk1NngxNjk3LnNkci5DMyJ9&_nc_ohc=reFjO94SCNYQ7kNvwEEK_sW&_nc_oc=Adq3A-JEirauVaT8IYF6hRX6diRANf9moo4zHjbwJ_osE-U-gt5YifM7tCaCR92VP54&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.facc5-2.fna&_nc_gid=5arnELQZMJnJqSkd3K1nug&_nc_ss=7a32e&oh=00_AfykxoQksjcPUJoa1VxRSCy0c3RlEDu4S5VSifCMk5z22w&oe=69C78627' },
        { id: 8, views: '3,307', url: 'https://instagram.facc5-1.fna.fbcdn.net/v/t51.71878-15/499409639_567666652656699_3949105421257731363_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=107&ig_cache_key=MzQzODI4MTA1NTczMDU3MzY3Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjcyMHgxMjgwLnNkci5DMyJ9&_nc_ohc=tRiW5g-n2ckQ7kNvwETQPHl&_nc_oc=AdqiGnh6fEn-rGDvxPRaVJIfVOyuQOrjQaIkA_yEX4h-shc09f4nCksK3KLeXNN_VYA&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.facc5-1.fna&_nc_gid=5arnELQZMJnJqSkd3K1nug&_nc_ss=7a32e&oh=00_AfxoMeYNszW87c8Md58AQ7DxmlScM8XD_2kx9oqsOfZHpg&oe=69C76959' },
        { id: 9, views: '602', url: 'https://instagram.facc5-1.fna.fbcdn.net/v/t51.71878-15/503013233_697109943083632_2121095943752933635_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=102&ig_cache_key=MzQyMTcwMTk5ODI5NzY1Nzc3Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjc4OHgxMzk4LnNkci5DMyJ9&_nc_ohc=L5WcxBGHrwIQ7kNvwEYpAXR&_nc_oc=AdpYzo1xZekzSFgZZRKLXdxHJtACznO8S2du_AbFyYEzIYgIBAA__q18HoZMCpK4FHk&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.facc5-1.fna&_nc_gid=5arnELQZMJnJqSkd3K1nug&_nc_ss=7a32e&oh=00_Afwq8M3uSLsR4IIaaA-bUI4n-FBQ0yIqSGo0PJpe2JOeQQ&oe=69C78E7C' },
        { id: 10, views: '864', url: 'https://instagram.facc5-1.fna.fbcdn.net/v/t51.71878-15/503052077_1677363612905865_258115531845538364_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=103&ig_cache_key=MzQwNjI5OTc2MjE4NDYzNTU1NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjkwMngxNjAxLnNkci5DMyJ9&_nc_ohc=g9oV4DSweJAQ7kNvwHMUc--&_nc_oc=AdotRpAeALOtnab2U2oVBM_bZ7dJdmSwN4rO7q8OrVNW5toi6PdNU3ITDk_rtKGGM6A&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.facc5-1.fna&_nc_gid=5arnELQZMJnJqSkd3K1nug&_nc_ss=7a32e&oh=00_Afzupz-M-fTcphqKTpkjjxGR4UAaeWFUjJ1g-a3v7652GQ&oe=69C778B5' },
    ];

    const instagramUrl = "https://www.instagram.com/simply.x.sarai/reels/";

    return (
        <section id="socials" style={{
            padding: '100px 10%',
            backgroundColor: '#fffafb',
            fontFamily: "'Funnel Display', sans-serif"
        }}>
            <h1 style={{
                fontSize: '48px',
                fontWeight: '700',
                textAlign: 'center',
                color: '#1a1a1a',
                marginBottom: '50px'
            }}>
                What's happening on socials
            </h1>

            <div className="socials-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: '2px',
                width: '100%',
                maxWidth: '1200px',
                margin: '0 auto',
                backgroundColor: 'white',
                border: '1px solid #efefef'
            }}>
                {reels.map((reel) => (
                    <a 
                        key={reel.id} 
                        href={instagramUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{
                            position: 'relative',
                            aspectRatio: '1080/1350',
                            overflow: 'hidden',
                            display: 'block'
                        }}
                    >
                        <img 
                            src={reel.url} 
                            alt={`Reel ${reel.id}`}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'filter 0.3s ease'
                            }}
                        />
                        <div style={{
                            position: 'absolute',
                            bottom: '10px',
                            left: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
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
                textAlign: 'center',
                marginTop: '40px',
                marginBottom: '100px'
            }}>
                <a 
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-block',
                        padding: '12px 30px',
                        backgroundColor: '#cc4d87',
                        color: 'white',
                        borderRadius: '50px',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '14px',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                    View on Instagram
                </a>
            </div>

            {/* Footer */}
            <footer style={{
                textAlign: 'center',
                padding: '60px 0',
                borderTop: '1px solid #efefef',
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
                    <a href="#" style={{ color: '#cc4d87' }}><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
                    <a href="#" style={{ color: '#cc4d87' }}><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z"/></svg></a>
                </div>
                <div style={{ color: '#aaa', fontSize: '12px', marginTop: '20px' }}>
                    © 2026 Sarai Nam. All rights reserved.
                </div>
            </footer>

            <style>{`
                @media (max-width: 1024px) {
                    #socials {
                        padding: 60px 5% !important;
                    }
                    #socials h1 {
                        font-size: 32px !important;
                        margin-bottom: 30px !important;
                    }
                    .socials-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Socials;
