import React from 'react';
import heroImg from '../assets/hero-bg.png';

const Hero = () => {
  return (
    <section className="hero" style={{
      height: '100vh',
      width: '100vw',
      backgroundImage: `url(${heroImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      zIndex: 1,
      animation: 'fadeIn 1.5s ease-out'
    }}>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @media (max-width: 768px) {
            .hero {
              height: 80vh !important;
              background-position: center bottom !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
