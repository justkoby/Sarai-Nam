import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar" style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '100px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 4rem',
      zIndex: 1000,
      backgroundColor: 'transparent',
    }}>
      <div className="nav-spacer" style={{ flex: 1 }}></div>
      <div className="nav-logo-container" style={{ flex: 2, display: 'flex', justifyContent: 'center' }}>
        <img 
          src={logo} 
          className="nav-logo"
          alt="Sarai Nam Logo" 
          style={{ 
            height: 'auto', 
            width: '150px',
            maxWidth: '80vw',
            filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.1))'
          }} 
        />
      </div>
      <div className="nav-menu-container" style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
        <button className="nav-menu-btn" style={{
          background: 'white',
          border: 'none',
          cursor: 'pointer',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '4px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
          transition: 'transform 0.2s ease',
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <div style={{ width: '20px', height: '2px', background: '#cc4d87', borderRadius: '1px' }}></div>
          <div style={{ width: '20px', height: '2px', background: '#cc4d87', borderRadius: '1px' }}></div>
          <div style={{ width: '20px', height: '2px', background: '#cc4d87', borderRadius: '1px' }}></div>
        </button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .navbar {
            padding: 0 1.5rem !important;
            height: 80px !important;
          }
          .nav-logo {
            width: 120px !important;
          }
          .nav-spacer {
            display: none !important;
          }
          .nav-logo-container {
            justify-content: flex-start !important;
            flex: 1 !important;
          }
          .nav-menu-container {
            flex: 1 !important;
          }
          .nav-menu-btn {
            width: 40px !important;
            height: 40px !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
