import React from 'react';

const CategoryBar = () => {
  const categories = ['TRAVEL', 'HEALTH', 'FOOD', 'BEAUTY', 'PHOTOGRAPHY'];

  return (
    <div className="category-bar" style={{
      width: '100%',
      backgroundColor: 'white',
      borderTop: '1px solid #f0f0f0',
      borderBottom: '1px solid #f0f0f0',
      padding: '1.5rem 0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 50,
      position: 'relative'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '2rem'
      }}>
        {categories.map((cat, index) => (
          <React.Fragment key={cat}>
            <a href={`#${cat.toLowerCase()}`} style={{
              fontSize: '0.85rem',
              fontWeight: '600',
              letterSpacing: '0.1em',
              color: '#333',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#cc4d87'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#333'}
            >
              {cat}
            </a>
            {index < categories.length - 1 && (
              <div style={{
                width: '1px',
                height: '24px',
                backgroundColor: '#e0e0e0'
              }}></div>
            )}
          </React.Fragment>
        ))}
      </div>
      <style>{`
        @media (max-width: 768px) {
          .category-bar {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CategoryBar;
