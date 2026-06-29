import React from 'react';

const About = () => {
  const containerStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '40px',
    background: '#FFFFFF',
    borderRadius: '16px',
    border: '1px solid rgba(217, 92, 71, 0.22)',
    boxShadow: '0 12px 30px rgba(43,43,43,0.10)',
    textAlign: 'center'
  };

  return (
    <div style={containerStyle}>
      <img
        src="/dp.jpg"
        alt="@theshivanshvasu"
        style={{ width: '180px', height: '180px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #D95C47', marginBottom: '20px', boxShadow: '0 4px 20px rgba(217, 92, 71, 0.4)' }}
      />
      <h2 style={{ fontSize: '2.5rem', marginBottom: '10px', color: '#2B2B2B' }}>About Me</h2>
      <h3 style={{ fontSize: '1.5rem', color: '#D95C47', marginBottom: '15px' }}>Dipti Joshi</h3>

      <p style={{ color: '#6B6763', fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '600px', margin: '0 auto 30px auto' }}>
        <strong>Woven with Love, Worn with Pride.</strong> 
        
        
        Experience the richness of India's heritage through our exquisite collection of traditional handlooms. Sourced directly from skilled weavers and artisans across the country, each piece tells a story of tradition, craftsmanship and community.

Saha - a women-powered startup, binds together the richness of Indian handlooms, designed to inspire modern trendsetters like you.

Sarees | Dress Materials | Dupattas
      </p>
    </div>
  );
};

export default About;
