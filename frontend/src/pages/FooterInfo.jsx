import React from 'react';
import '../styles/pages.css';

const FooterInfo = () => {
  return (
    <div className="page">
      <div className="section-header">
        <div>
          <h2 className="section-title">Contact Us</h2>
          <p className="subtle-text">Quick access to customer support.</p>
        </div>
      </div>

      <div className="product-grid">
        <div className="product-card" style={{ padding: '24px' }}>
          <h3>Email</h3>
          <p className="subtle-text">traditionssaha@gmail.com</p>
        </div>
        <div className="product-card" style={{ padding: '24px' }}>
          <h3>Number</h3>
          <p className="subtle-text">9136938373</p>
        </div>
        
        
      </div>
    </div>
  );
};

export default FooterInfo;
